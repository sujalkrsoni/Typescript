# TypeScript Type Aliases

## What is a Type Alias?

A Type Alias allows us to create a custom name for an existing type.

Instead of repeatedly writing a type, we can give it a meaningful name and reuse it throughout our code.

### Syntax

```ts
type AliasName = ExistingType;
```

---

# Basic Type Alias

```ts
type str = string;
```

Now `str` becomes another name for `string`.

```ts
let a: str = "hello world!";
```

Valid because:

```ts
str = string
```

---

## Type Safety

```ts
let b: str = 23;
```

Error:

```ts
Type 'number' is not assignable to type 'string'.
```

### Why?

TypeScript replaces:

```ts
str
```

with:

```ts
string
```

behind the scenes.

So this becomes:

```ts
let b: string = 23;
```

which is invalid.

---

# Custom Union Type Alias

Instead of writing:

```ts
string | number | boolean
```

multiple times, we can create a reusable alias.

```ts
type myType = string | number | boolean;
```

---

## Usage

```ts
let c: myType = "hello world!";
let d: myType = 23;
let e: myType = true;
```

All are valid because:

```ts
myType = string | number | boolean
```

---

# Type Alias with Arrays

```ts
let f: myType[] = [
  "hello world!",
  23,
  true,
  "typescript",
  3.14,
  false
];
```

### TypeScript Interpretation

```ts
let f: (string | number | boolean)[];
```

Meaning:

* Strings allowed ✅
* Numbers allowed ✅
* Booleans allowed ✅

---

# Why Use Type Aliases?

Without Alias:

```ts
let value1: string | number | boolean;
let value2: string | number | boolean;
let value3: string | number | boolean;
```

---

With Alias:

```ts
type myType = string | number | boolean;

let value1: myType;
let value2: myType;
let value3: myType;
```

Cleaner and easier to maintain.

---

# Type Alias Naming

```ts
type user = string | number;
```

Now:

```ts
let userName: user = "Sujal Kumar Soni";
let userId: user = 1234567890;
```

Both are valid.

---

# Type Alias vs Variable Name

Type aliases and variables exist in different namespaces.

Example:

```ts
type user = string | number;

let user: user = "Sujal Kumar Soni";
```

This is valid TypeScript.

### Why?

Because:

```ts
type user
```

and

```ts
let user
```

are different things.

TypeScript can distinguish between:

* Type Space
* Value Space

---

## Example

```ts
type user = string | number;

let user: user = "Sujal Kumar Soni";
let user2: user = 1234567890;
```

Valid code.

Although technically allowed, using the same name for both a type and a variable is generally not recommended because it can reduce readability.

---

# TypeScript Concepts Covered

## 1. Type Alias

```ts
type str = string;
```

Creates a custom name for an existing type.

---

## 2. Union Types

```ts
type myType = string | number | boolean;
```

A value can be one of multiple types.

---

## 3. Alias Reusability

```ts
type myType = string | number | boolean;
```

Write once, use everywhere.

---

## 4. Array of Union Types

```ts
myType[]
```

Equivalent to:

```ts
(string | number | boolean)[]
```

---

## 5. Type Space vs Value Space

```ts
type user = string;

let user = "Sujal";
```

Allowed because types and variables live in different namespaces.

---

# Quick Revision

| Syntax                           | Meaning              |
| -------------------------------- | -------------------- |
| `type str = string`              | Alias of string      |
| `type myType = string \| number` | Union Type Alias     |
| `myType[]`                       | Array of myType      |
| `type user = string`             | Custom reusable type |
| `let user: user`                 | Variable using alias |

---

# Interview Definition

> A Type Alias is a custom name for a type. It helps improve code readability, reusability, and maintainability by allowing developers to define complex types once and reuse them throughout the application.

---

# One-Line Summary

**Type Aliases allow us to create reusable names for existing types, union types, tuples, objects, and other complex TypeScript type definitions.**
