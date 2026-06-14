# TypeScript: Explicit vs Implicit Typing

## 1. Explicit Typing

When we manually specify a type.

```ts
let username: string = "Sujal";
let age: number = 22;
```

### Interview Definition

> Explicit typing means manually declaring a type using TypeScript type annotations.

---

## 2. Implicit Typing (Type Inference)

When TypeScript automatically determines the type from the assigned value.

```ts
let username = "Sujal";
let age = 22;
```

TypeScript infers:

```ts
let username: string;
let age: number;
```

### Interview Definition

> Implicit typing means TypeScript automatically infers the type based on the assigned value.

---

# Arrays in TypeScript

## Explicitly Typed String Array

```ts
let arr: string[] = ["Hello", "World", "!"];

arr.push("This is a string array");

// arr.push(123); ❌ Error
```

### Explanation

* `string[]` means an array can contain only strings.
* Adding a number will cause a TypeScript error.

---

## Array of Any Type (Implicit any[])

```ts
let arr2 = [];

arr2[0] = 5;
arr2[1] = "Hello";
arr2[2] = true;
arr2[3] = { name: "John", age: 30 };
```

### Explanation

TypeScript infers:

```ts
let arr2: any[];
```

Since it is `any[]`, any type of value can be stored.

⚠️ Not recommended because type safety is lost.

---

## Number Array (Implicit number[])

```ts
let arr3 = [1, 2, 3];

arr3.push(4);
arr3.push(Infinity);
arr3.push(NaN);
arr3.push(-Infinity);

// arr3.push("Hello"); ❌ Error
```

### Explanation

TypeScript infers:

```ts
let arr3: number[];
```

All values must be numbers.

Valid JavaScript numbers:

* `4`
* `Infinity`
* `-Infinity`
* `NaN`

---

## Generic Array Syntax

Another way to declare arrays.

```ts
let arr4: Array<string> = ["Hello", "World"];

arr4.push("This is another string array");

// arr4.push(123); ❌ Error
```

### Equivalent To

```ts
let arr4: string[];
```

Both are exactly the same.

---

## Union Type Array

```ts
let arr5: (string | number)[] = [
  "Hello",
  123,
  "World",
  456
];

arr5.push("New String");
arr5.push(789);

// arr5.push(true); ❌ Error
```

### Explanation

```ts
(string | number)[]
```

Means:

* Strings allowed ✅
* Numbers allowed ✅
* Boolean not allowed ❌

---

## Optional Chaining

```ts
arr5[0]?.toLocaleString();
```

### What is `?.` ?

Optional Chaining safely accesses a property or method.

Without Optional Chaining:

```ts
arr5[0].toLocaleString();
```

If `arr5[0]` is `undefined`, runtime error occurs.

With Optional Chaining:

```ts
arr5[0]?.toLocaleString();
```

If value is `undefined`, TypeScript returns:

```ts
undefined
```

instead of throwing an error.

### Example

```ts
let user = undefined;

user?.name;
```

Output:

```ts
undefined
```

No error.

---

# Quick Revision

| Syntax                 | Meaning                         |
| ---------------------- | ------------------------------- |
| `string[]`             | Array of strings                |
| `number[]`             | Array of numbers                |
| `any[]`                | Array of any type               |
| `Array<string>`        | Generic syntax for string array |
| `(string \| number)[]` | Array of strings or numbers     |
| `?.`                   | Optional Chaining               |

---

# One-Line Summary

**TypeScript arrays can be explicitly typed (`string[]`, `number[]`) or inferred automatically, and optional chaining (`?.`) helps safely access values without runtime errors.**
