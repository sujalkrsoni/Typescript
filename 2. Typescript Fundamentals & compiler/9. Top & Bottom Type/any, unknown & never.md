# TypeScript Top & Bottom Types: `any`, `unknown`, and `never`

## Introduction

In TypeScript, some special types sit at the extremes of the type system.

```text
                TOP TYPES
                     │
          ┌──────────┴──────────┐
          │                     │
         any                unknown
          │
          │
      All Other Types
(string, number, boolean, object, etc.)
          │
          ▼
         never
      BOTTOM TYPE
```

### Top Types

A **Top Type** can hold values of **any type**.

TypeScript has two top types:

* `any`
* `unknown`

### Bottom Type

A **Bottom Type** represents values that never occur.

TypeScript has one bottom type:

* `never`

---

# 1. any Type

## What is `any`?

The `any` type disables TypeScript's type checking.

When a variable is typed as `any`, TypeScript allows any operation on it.

```ts
let value: any;

value = 10;
value = "Hello";
value = true;
value = {};
value = [];
```

All of these are allowed.

---

## Why Does any Exist?

Sometimes TypeScript does not know the type of incoming data.

Examples:

* Third-party libraries
* Legacy JavaScript code
* Dynamic JSON responses
* Migration from JS to TS

---

## Example

```ts
let user: any = "Sujal";

user.toUpperCase();
user.toFixed(2);
user.xyz.abc.def;
```

TypeScript reports **no errors**.

Even though some operations may crash at runtime.

---

## Problem with any

```ts
let age: any = "25";

console.log(age.toFixed(2));
```

Runtime Error:

```text
age.toFixed is not a function
```

TypeScript could not protect us because `any` disables checking.

---

## Type Compatibility

`any` can be assigned to anything.

```ts
let value: any = "Hello";

let str: string = value;
let num: number = value;
let bool: boolean = value;
```

All are allowed.

---

## Remember

⚠️ `any` turns off TypeScript safety.

Use it only when absolutely necessary.

---

# 2. unknown Type

## What is unknown?

`unknown` is the **safe version of any**.

It can store any value, but you cannot use that value until TypeScript knows its type.

```ts
let value: unknown;

value = "Hello";
value = 25;
value = true;
```

All assignments are allowed.

---

## Example

```ts
let value: unknown = "Sujal";

console.log(value.toUpperCase());
```

Error:

```text
Object is of type 'unknown'
```

TypeScript prevents unsafe operations.

---

## Type Narrowing

Before using an `unknown` value, you must check its type.

```ts
let value: unknown = "Sujal";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

Now TypeScript allows it.

---

## Real-World Example

### API Response

```ts
const data: unknown = await fetchData();
```

Before using it:

```ts
if (typeof data === "object" && data !== null) {
  console.log(data);
}
```

This prevents runtime crashes.

---

## unknown vs any

### any

```ts
let value: any = "Hello";

value.toUpperCase();
value.toFixed(2);
value.xyz;
```

Everything is allowed.

---

### unknown

```ts
let value: unknown = "Hello";

value.toUpperCase();
```

Error.

Must narrow first.

---

## Type Compatibility

### Allowed

```ts
let value: unknown = "Hello";
```

### Not Allowed

```ts
let value: unknown = "Hello";

let str: string = value;
```

Error.

Must narrow first.

---

## Remember

✅ `unknown` accepts everything.

❌ But you cannot use it until its type is verified.

---

# any vs unknown

| Feature                 | any        | unknown   |
| ----------------------- | ---------- | --------- |
| Stores any value        | ✅          | ✅         |
| Type checking           | ❌ Disabled | ✅ Enabled |
| Safe                    | ❌ No       | ✅ Yes     |
| Requires type narrowing | ❌ No       | ✅ Yes     |
| Recommended             | ⚠️ Rarely  | ✅ Yes     |

---

# 3. never Type

## What is never?

The `never` type represents values that never exist.

It is the **bottom type** of TypeScript.

```text
never = impossible value
```

---

## When Does never Occur?

### 1. Function That Never Returns

```ts
function throwError(): never {
  throw new Error("Something went wrong");
}
```

The function never returns a value.

Execution stops immediately.

---

### 2. Infinite Loop

```ts
function infiniteLoop(): never {
  while (true) {}
}
```

The function never finishes.

---

### 3. Exhaustive Checking

```ts
type Shape = "circle" | "square";

function getArea(shape: Shape) {
  switch (shape) {
    case "circle":
      return 100;

    case "square":
      return 200;

    default:
      const impossible: never = shape;
      return impossible;
  }
}
```

If a new shape is added later, TypeScript will report an error.

This helps catch missing cases.

---

# Why is never Called Bottom Type?

Because it can be assigned to every type.

```ts
let value: never;

let str: string = value;
let num: number = value;
let bool: boolean = value;
```

Allowed.

---

But nothing can be assigned to `never`.

```ts
let value: never = "Hello";
```

Error:

```text
Type 'string' is not assignable to type 'never'
```

---

## Type Compatibility

```text
never
  │
  ├── string
  ├── number
  ├── boolean
  └── object
```

`never` can flow upward into all types.

But no type can flow into `never`.

---

# Top Types vs Bottom Type

```text
                    any
                     │
                 unknown
                     │
     ┌───────────────┼───────────────┐
     │               │               │
  string         number         boolean
     │               │               │
     └───────────────┼───────────────┘
                     │
                   never
```

---

# Interview Questions

## Q. What is the difference between any and unknown?

### Answer

`any` disables TypeScript's type checking and allows any operation. `unknown` can store any value but requires type checking before the value can be used. Therefore, `unknown` is safer and generally preferred over `any`.

---

## Q. What is never in TypeScript?

### Answer

`never` represents values that never occur. It is commonly used for functions that never return, functions that always throw errors, infinite loops, and exhaustive type checking.

---

## Q. Why is never called the bottom type?

### Answer

Because `never` is assignable to every type, but no type is assignable to `never`.

---

# Quick Revision

| Type    | Category    | Description                  |
| ------- | ----------- | ---------------------------- |
| any     | Top Type    | Disables type checking       |
| unknown | Top Type    | Safe version of any          |
| never   | Bottom Type | Represents impossible values |

---

# Memory Trick

```text
any
 ↓
"I don't care about types."

unknown
 ↓
"I don't know the type yet."

never
 ↓
"This value can never exist."
```

---

# One-Line Summary

**`any` removes type safety, `unknown` preserves type safety while accepting any value, and `never` represents impossible values that can never occur.**
