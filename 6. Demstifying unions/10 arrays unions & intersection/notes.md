Here are clean notes for your example:

# TypeScript Union (`|`) vs Intersection (`&`) with Arrays

## 1. Union of Arrays

```ts
type T1 = number[];
type T2 = string[];

type T3 = T1 | T2;
```

`T3` means:

```ts
number[] | string[]
```

The array must be **either**:

* A complete `number[]`
* A complete `string[]`

✅ Valid

```ts
const arr1: T3 = [1, 2, 3];

const arr2: T3 = ["a", "b", "c"];
```

❌ Invalid

```ts
const arr3: T3 = ["hello", 22];
```

Because:

```ts
["hello", 22]
```

is:

```ts
(string | number)[]
```

not:

```ts
string[] | number[]
```

---

## 2. Heterogeneous vs Homogeneous Arrays

### Heterogeneous Array

Different types can exist together.

```ts
(string | number)[]
```

Example:

```ts
const arr = ["hello", 22, "world", 50];
```

Contains both strings and numbers.

---

### Homogeneous Array

All elements must be of the same type.

```ts
string[] | number[]
```

Example:

```ts
["hello", "world"] // string[]

[10, 20, 30] // number[]
```

Cannot mix types.

---

## 3. Intersection of Arrays

```ts
type T4 = T1 & T2;
```

Expands to:

```ts
number[] & string[]
```

Meaning:

> The array must be both `number[]` and `string[]` at the same time.

This is impossible.

TypeScript resolves the element type as:

```ts
number & string
```

which becomes:

```ts
never
```

So effectively:

```ts
type T4 = never[];
```

---

### Why This Fails

```ts
const arr: T4 = ["hello", 22];
```

Error because:

```ts
string  ❌ not assignable to never
number  ❌ not assignable to never
```

---

## 4. Using `never`

```ts
let a: never;
let b!: never;
```

The `!` here is **Definite Assignment Assertion**.

```ts
let b!: never;
```

means:

> "Trust me, I will assign a value later."

Without `!`:

```ts
let b: never;
```

TypeScript may complain that the variable is used before assignment.

---

### Non-Null Assertion

```ts
a!
```

Here `!` is a **Non-Null Assertion Operator**.

```ts
const arr2: T4 = [a!, b];
```

You're telling TypeScript:

> "Treat this value as definitely present."

But remember:

```ts
T4 = never[]
```

so only `never` values can be stored.

---

# Arrays Are Objects in JavaScript

Arrays are special objects.

Because of that, we can attach custom properties to them.

---

## Intersection with an Object

```ts
type T5 = number[] & {
    test: string;
};
```

This means:

```ts
{
  0: number;
  1: number;
  ...
  length: number;
  test: string;
}
```

The value must be:

1. A `number[]`
2. Have a `test` property

---

### Why This Fails

```ts
const arr5: T5 = [1, 2, 3];
```

Error:

```ts
Property 'test' is missing
```

Because the array does not contain:

```ts
test: string
```

---

## Type Assertion

```ts
const arr5 = [1, 2, 3] as T5;
```

You're telling TypeScript:

> "Trust me, this satisfies T5."

---

## Adding the Property Later

```ts
arr5.test = "hello";
```

Now the array contains:

```ts
[1, 2, 3]
```

plus:

```ts
{
  test: "hello"
}
```

---

## Output

```ts
console.log(arr5);
```

Output:

```ts
[1, 2, 3, test: "hello"]
```

---

# Key Takeaways

### Union (`|`)

```ts
number[] | string[]
```

➡ Either a number array OR a string array.

---

### Intersection (`&`)

```ts
number[] & string[]
```

➡ Must satisfy both types simultaneously.

➡ Element type becomes:

```ts
number & string
```

➡ Result:

```ts
never[]
```

---

### Arrays Are Objects

```ts
type T5 = number[] & {
    test: string;
};
```

Since arrays are objects, extra properties can be added:

```ts
arr5.test = "hello";
```

This is why intersections between arrays and objects are possible.
