# TypeScript Tuples + TypeScript Concepts

## Array vs Tuple

### Array

```ts
let a = [1, "hello world!"];
```

TypeScript infers:

```ts
let a: (string | number)[];
```

This means:

* Array can contain strings and numbers.
* Any position can contain either type.

```ts
a[0]; // string | number
a[1]; // string | number
```

---

## Problem with Arrays

```ts
a[1]?.toUpperCase();
```

Error:

```ts
Property 'toUpperCase' does not exist on type 'string | number'
```

### Why?

TypeScript only knows:

```ts
a[1]: string | number
```

A number does not have:

```ts
toUpperCase()
```

Therefore TypeScript prevents it.

---

## TypeScript Concept: Union Types

```ts
(string | number)[]
```

means:

```ts
Array<
  string | number
>
```

Every element can be either:

* string
* number

---

# Tuple

## What is a Tuple?

A Tuple is a **fixed-length array** where each position has a predefined type.

```ts
const b: [string, number] = [
  "T-shirt",
  500
];
```

---

## Difference

### Array

```ts
(string | number)[]
```

Meaning:

```ts
[
  string | number,
  string | number,
  string | number
]
```

Any position can contain either type.

---

### Tuple

```ts
[string, number]
```

Meaning:

```ts
[
  string,
  number
]
```

Position matters.

```ts
b[0]; // string
b[1]; // number
```

---

## Benefits of Tuples

Since TypeScript knows:

```ts
b[0]: string
```

it allows:

```ts
b[0].toLowerCase();
```

No error.

---

# Named Tuples

TypeScript allows naming tuple elements.

```ts
const c: [
  name: string,
  age: number
] = [
  "Sujal Kumar Soni",
  22
];
```

---

## Benefits

More readable.

Instead of:

```ts
[string, number]
```

you get:

```ts
[
  name: string,
  age: number
]
```

---

# Readonly Tuples

TypeScript also supports `readonly` tuples.

```ts
const d: readonly [string, number] = [
  "Sujal Kumar Soni",
  22
];
```

---

## Why use `readonly`?

It prevents tuple mutation methods like:

```ts
d.push(1);
d.pop();
d.shift();
d.unshift("hello");
```

This is useful when you want the tuple shape to stay fixed.

---

# Fixed Length Nature

```ts
c[0]; // string
c[1]; // number
```

Trying to access:

```ts
c[2];
```

Error:

```ts
Tuple type '[name: string, age: number]'
of length '2'
has no element at index '2'
```

---

## TypeScript Concept

Tuples have:

* Fixed Length
* Fixed Order
* Fixed Types

---

# Tuple Destructuring

```ts
const [x, y] = c;
```

TypeScript infers:

```ts
x: string
y: number
```

---

## Concept

This is called:

### Destructuring + Type Inference

TypeScript automatically infers types from tuple positions.

---

# Runtime Problem with Tuples

## pop()

```ts
c.pop();
```

Now internally:

```ts
["Sujal Kumar Soni"]
```

---

### Problem

```ts
c[1].toFixed();
```

Runtime Error ❌

because:

```ts
c[1]
```

is now:

```ts
undefined
```

and

```ts
undefined.toFixed()
```

does not exist.

---

# Why Doesn't TypeScript Stop This?

Because tuples are implemented using JavaScript arrays.

JavaScript arrays allow:

```ts
pop()
push()
shift()
unshift()
```

TypeScript cannot completely prevent these runtime operations.

---

# Another Example

```ts
c.push(4);
c.push("hello world");
c.push(6);
```

JavaScript allows this.

Runtime result:

```ts
[
  "Sujal Kumar Soni",
  22,
  4,
  "hello world",
  6
]
```

---

## TypeScript Concept

### Compile Time vs Runtime

At Compile Time:

```ts
[name: string, age: number]
```

TypeScript treats it as a tuple.

At Runtime:

```ts
[]
```

It is just a normal JavaScript array.

TypeScript types disappear after compilation.

---

# Best Practice

Avoid using:

```ts
push()
pop()
shift()
unshift()
```

on tuples.

Reason:

They break the fixed-length guarantee of tuples.

---

# Concepts Learned

| TypeScript Concept      | Example                        |
| ----------------------- | ------------------------------ |
| Union Types             | `(string \| number)[]`         |
| Tuple Types             | `[string, number]`             |
| Named Tuples            | `[name: string, age: number]`  |
| Fixed Length Types      | Tuple length checking          |
| Position-Based Typing   | `b[0] → string`                |
| Destructuring Inference | `const [x, y] = c`             |
| Compile Time vs Runtime | `push()` and `pop()` on tuples |

---

# Array vs Tuple

| Array                        | Tuple                   |
| ---------------------------- | ----------------------- |
| Dynamic length               | Fixed length            |
| Same or union types          | Different types allowed |
| Order usually doesn't matter | Order matters           |
| `string[]`                   | `[string, number]`      |
| Flexible                     | Strict                  |

---

# Interview Summary

A tuple is a fixed-length array where each position has a predefined type. Unlike normal arrays, tuples provide position-based type safety, but at runtime they are still JavaScript arrays, so methods like `push()` and `pop()` can break the tuple structure and should generally be avoided.
