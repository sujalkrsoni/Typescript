## Types as Sets in TypeScript

A useful way to understand TypeScript types is:

> **A type is a set of values that a variable can hold.**

For example:

```ts
let age: number = 25;
```

The type `number` represents the set of all possible numbers, and `25` is one value from that set.

---

# Primitive Types

## `number`

Represents the set of all numeric values.

```ts
const num: number = 23;
```

```txt
..., -2, -1, 0, 1, 2, 3, ...
```

* Infinite set of values.

---

## `string`

Represents the set of all strings.

```ts
const str: string = "hello";
```

Examples:

```txt
"hello"
"typescript"
"123"
""
```

* Infinite set of values.

---

## `boolean`

Represents only two possible values.

```ts
const bool: boolean = false;
```

Possible values:

```txt
true
false
```

* Finite set of values.

---

# Singleton Types

A singleton type contains exactly **one value**.

## `undefined`

```ts
const un: undefined = undefined;
```

Possible values:

```txt
undefined
```

---

## `null`

```ts
const nu: null = null;
```

Possible values:

```txt
null
```

---

# Object Type

## `object`

Represents all **non-primitive values**.

```ts
const obj: object = {};
```

Valid examples:

```ts
const a: object = {};
const b: object = [];
const c: object = new Date();
const d: object = () => {};
```

Invalid examples:

```ts
const e: object = "hello"; // ❌
const f: object = 123;     // ❌
const g: object = true;    // ❌
const h: object = null;    // ❌
```

### Important

`object` does **not** mean all values.

It means:

> Any value that is **not a primitive** (`string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`).

---

# Void Type

## `void`

Used mainly for functions that don't return anything.

```ts
function log(): void {
    console.log("Hello");
}
```

For variables:

```ts
const vd: void = undefined;
```

With `strictNullChecks` enabled:

```ts
const vd: void = undefined; // ✅
```

So in practice, `void` behaves similarly to `undefined` when used as a variable type.

---

# Unknown Type (Safe Top Type)

## `unknown`

Represents **all possible values**.

```ts
const universal: unknown = "hello";
```

Examples:

```ts
const a: unknown = 123;
const b: unknown = "hello";
const c: unknown = true;
const d: unknown = null;
const e: unknown = undefined;
const f: unknown = {};
```

### Why is it safe?

You cannot use an `unknown` value directly.

```ts
let value: unknown = "hello";

let str: string = value; // ❌ Error
```

You must first narrow the type.

```ts
if (typeof value === "string") {
    let str: string = value; // ✅
}
```

### Key Point

> `unknown` can hold any value, but you cannot use it until TypeScript knows its type.

---

# Never Type (Bottom Type)

## `never`

Represents an **empty set of values**.

```ts
let value: never;
```

No value can ever be assigned to it.

```ts
value = 10;        // ❌
value = "hello";   // ❌
value = undefined; // ❌
```

### Common Usage

Functions that never finish normally:

```ts
function throwError(): never {
    throw new Error("Something went wrong");
}
```

### Key Point

> `never` means "this value can never exist."

---

# Any Type

## `any`

Represents any value and disables TypeScript type checking.

```ts
let value: any = "hello";
```

You can assign anything to it:

```ts
value = 10;
value = true;
value = {};
```

You can also assign it to any other type:

```ts
let a: any = "hello";

let str: string = a; // ✅
let num: number = a; // ✅
let bool: boolean = a; // ✅
```

### Why is it dangerous?

```ts
let value: any = "hello";

value.notExistingMethod(); // No TypeScript error
```

This can cause runtime errors.

### Key Point

> `any` turns off TypeScript's safety checks.

---

# `unknown` vs `any`

```ts
let a: any = "hello";
let b: unknown = "hello";
```

### Assignment

```ts
let str1: string = a; // ✅

let str2: string = b; // ❌
```

### Property Access

```ts
a.toUpperCase(); // ✅

b.toUpperCase(); // ❌
```

### After Narrowing

```ts
if (typeof b === "string") {
    b.toUpperCase(); // ✅
}
```

### Summary

| Feature                           | any | unknown |
| --------------------------------- | --- | ------- |
| Can store any value               | ✅   | ✅       |
| Can assign to any type            | ✅   | ❌       |
| Requires type checking before use | ❌   | ✅       |
| Type-safe                         | ❌   | ✅       |

---

# Top Type and Bottom Type

## Top Type

A top type can hold values from all other types.

```ts
unknown
```

Examples:

```ts
let value: unknown = 123;
value = "hello";
value = true;
value = {};
```

### `unknown` is the real Top Type.

---

## Bottom Type

A bottom type contains no values.

```ts
never
```

No value can belong to it.

### `never` is the Bottom Type.

---

# Where Does `any` Fit?

`any` is special.

```ts
let x: any;
let y: string = x; // ✅

let z: any = y; // ✅
```

It is assignable to and from every type.

Because of this:

```txt
unknown → Real Top Type
never   → Bottom Type
any     → Escape Hatch (outside normal type system)
```

### Interview Note

> `unknown` is the safe top type.
>
> `never` is the bottom type.
>
> `any` is not a true top type; it bypasses TypeScript's type checking and sits outside the normal type hierarchy.

---

# Quick Revision

```txt
number    → Infinite set of numbers
string    → Infinite set of strings
boolean   → true | false
null      → Only null
undefined → Only undefined
object    → All non-primitive values
void      → Mostly used for functions with no return value
unknown   → Safe top type (can hold anything)
never     → Empty set of values (bottom type)
any       → Disables type checking
```

### Type Hierarchy

```txt
            unknown
           /   |   \
      string number boolean
           \   |   /
             never

(any sits outside the hierarchy)
```
