# TypeScript Array Methods + TypeScript Concepts

```ts
let a = [1, 2, 3, 4, 5];
```

TypeScript infers:

```ts
let a: number[];
```

No type annotation was written manually.

This demonstrates:

* **Implicit Typing** → Type is not explicitly declared.
* **Type Inference** → TypeScript automatically infers `number[]`.

---

# 1. forEach()

## What does forEach do?

`forEach()` executes a callback function for every element of an array.

```ts
a.forEach((num) => {
  console.log(num);
});
```

Output:

```ts
1
2
3
4
5
```

---

## TypeScript Concept: Contextual Typing

Since:

```ts
a: number[]
```

TypeScript automatically infers:

```ts
num: number
```

No need to write:

```ts
a.forEach((num: number) => {})
```

This is called **Contextual Typing** because the type of `num` is determined from the context in which it is used.

### Key Point

* `forEach()` returns `undefined`
* Used for side effects (logging, API calls, DOM updates)

---

# 2. map()

## What does map do?

`map()` transforms each element and returns a **new array**.

```ts
let b = a.map((num) => num * 2);
```

Output:

```ts
[2, 4, 6, 8, 10]
```

---

## TypeScript Concept: Callback Return Type Inference

The callback returns:

```ts
number
```

Therefore TypeScript infers:

```ts
let b: number[];
```

TypeScript examines the callback's return value and automatically determines the resulting array type.

This is called **Callback Return Type Inference**.

---

## Number → String Transformation

```ts
let c = a.map((el) => el.toString());
```

Output:

```ts
["1", "2", "3", "4", "5"]
```

TypeScript infers:

```ts
let c: string[];
```

### TypeScript Concepts

Callback returns:

```ts
string
```

Therefore:

```ts
string[]
```

is inferred automatically.

Here TypeScript performs:

* Contextual Typing (`el` becomes `number`)
* Callback Return Type Inference (`string`)

---

## Number → Boolean Transformation

```ts
let boolArr = a.map(
  (el) => el % 2 === 0
);
```

Output:

```ts
[false, true, false, true, false]
```

TypeScript infers:

```ts
let boolArr: boolean[];
```

### TypeScript Concepts

The expression:

```ts
el % 2 === 0
```

returns:

```ts
boolean
```

Therefore:

```ts
boolean[]
```

is inferred.

---

# 3. Union Types + map()

```ts
let arr = [1, 2, "hello", 4, "world", 6];
```

TypeScript infers:

```ts
let arr: (string | number)[];
```

This is called a **Union Type Array**.

---

## Using map()

```ts
let d = arr.map(
  (el) => typeof el === "number"
);
```

Output:

```ts
[true, true, false, true, false, true]
```

---

## TypeScript Concept: Type Narrowing

Initially:

```ts
el: string | number
```

Inside:

```ts
typeof el === "number"
```

TypeScript narrows:

```ts
string | number
```

to:

```ts
number
```

within that block.

This is called **Type Narrowing**.

Result type:

```ts
boolean[]
```

because the callback returns a boolean.

---

## Practical Type Narrowing Example

```ts
arr.forEach((el) => {
  if (typeof el === "number") {
    console.log(el.toFixed(2));
  }
});
```

Without narrowing:

```ts
el.toFixed(2);
```

would produce an error because:

```ts
el: string | number
```

and strings do not have `toFixed()`.

After narrowing:

```ts
el: number
```

so TypeScript allows it.

---

# 4. reduce()

## What does reduce do?

`reduce()` combines all elements into a single value.

```ts
let sum = a.reduce(
  (acc, curr) => acc + curr,
  0
);
```

Output:

```ts
15
```

---

## How reduce Works

```ts
0 + 1 = 1
1 + 2 = 3
3 + 3 = 6
6 + 4 = 10
10 + 5 = 15
```

Final Result:

```ts
15
```

---

## TypeScript Concept: Accumulator Type Inference

Initial value:

```ts
0
```

is a number.

Therefore TypeScript infers:

```ts
acc: number
curr: number
sum: number
```

This is called **Accumulator Type Inference**.

---

## reduce() Returning a Different Type

```ts
let result = a.reduce(
  (acc, curr) => acc + curr.toString(),
  ""
);
```

Output:

```ts
"12345"
```

TypeScript infers:

```ts
result: string
```

Because the initial value is a string:

```ts
""
```

TypeScript infers:

```ts
result: string
```

This demonstrates **Accumulator Type Inference**.

---

# Concepts Learned From These Examples

| TypeScript Concept             | Example                                                 |
| ------------------------------ | ------------------------------------------------------- |
| Implicit Typing                | `let a = [1,2,3]`                                       |
| Type Inference                 | `number[]` inferred automatically                       |
| Contextual Typing              | `num` automatically becomes `number`                    |
| Callback Return Type Inference | `map()` callback determines result type                 |
| Union Types                    | `(string \| number)[]`                                  |
| Type Narrowing                 | `typeof el === "number"`                                |
| Accumulator Type Inference     | `reduce()` accumulator type inferred from initial value |

---

# Method Revision

| Method    | Returns      | Purpose                       |
| --------- | ------------ | ----------------------------- |
| forEach() | `undefined`  | Execute code for each element |
| map()     | New Array    | Transform elements            |
| reduce()  | Single Value | Combine array into one value  |

---

# Interview Summary

These examples demonstrate both JavaScript array methods and important TypeScript type-system features.

### JavaScript Methods

* `forEach()`
* `map()`
* `reduce()`

### TypeScript Concepts Covered

✅ Implicit Typing

✅ Type Inference

✅ Contextual Typing

✅ Union Types

✅ Type Narrowing

✅ Callback Return Type Inference

✅ Accumulator Type Inference

The array methods are the JavaScript tools, while TypeScript's type system automatically analyzes those methods to infer types, narrow unions, and ensure type safety.
