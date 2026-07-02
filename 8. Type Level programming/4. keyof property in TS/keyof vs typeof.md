# TypeScript Notes: `typeof` vs `keyof`

## Introduction

JavaScript and TypeScript both have a `typeof` operator, but **TypeScript extends its usage** and also introduces another operator called `keyof`.

* **`typeof`** → Gets the type of a value.
* **`keyof`** → Gets the property names (keys) of a type.

> **Important:** `typeof` and `keyof` are **TypeScript compile-time operators** when used in type positions. They do not exist at runtime.

---

# 1. `typeof`

## JavaScript `typeof` (Runtime)

In JavaScript, `typeof` returns the type of a value.

```javascript
let name = "Sujal";

console.log(typeof name);
```

Output:

```text
string
```

More examples:

```javascript
console.log(typeof 100);          // "number"
console.log(typeof true);         // "boolean"
console.log(typeof undefined);    // "undefined"
console.log(typeof null);         // "object" (JavaScript bug)
console.log(typeof {});           // "object"
console.log(typeof []);           // "object"
console.log(typeof function(){}); // "function"
```

---

## TypeScript `typeof` (Compile Time)

In TypeScript, `typeof` can extract the type of a variable or value.

```ts
const user = {
    name: "Sujal",
    age: 22
};

type User = typeof user;
```

Now,

```ts
type User = {
    name: string;
    age: number;
}
```

Instead of writing the type manually, TypeScript infers it from the value.

---

# 2. `keyof`

The `keyof` operator returns a **union of the property names (keys)** of a type.

## Example

```ts
type User = {
    name: string;
    age: number;
};
```

```ts
type UserKeys = keyof User;
```

Result:

```ts
type UserKeys = "name" | "age";
```

Notice that `keyof` returns only the **property names**, not the values or the entire object type.

---

# Visual Representation

```ts
type User = {
    name: string;
    age: number;
}
```

Keys:

```text
name
age
```

Values:

```text
string
number
```

Therefore,

```ts
type Keys = keyof User;
```

becomes

```ts
type Keys = "name" | "age";
```

---

# Another Example

```ts
type Car = {
    brand: string;
    model: string;
    year: number;
};

type CarKeys = keyof Car;
```

Result:

```ts
type CarKeys = "brand" | "model" | "year";
```

---

# `keyof` Works Only on Types

Correct:

```ts
type User = {
    name: string;
    age: number;
};

type Keys = keyof User;
```

Incorrect:

```ts
const user = {
    name: "Sujal",
    age: 22
};

console.log(keyof user); // ❌ Error
```

Why?

Because `keyof` is a **TypeScript operator**, not a JavaScript operator. It is removed after compilation.

---

# How to Use `keyof` with an Object

If you have an object instead of a type:

```ts
const user = {
    name: "Sujal",
    age: 22
};
```

First extract its type:

```ts
type User = typeof user;
```

Then use `keyof`:

```ts
type Keys = keyof User;
```

Or simply combine them:

```ts
type Keys = keyof typeof user;
```

Result:

```ts
type Keys = "name" | "age";
```

This is a very common interview question.

---

# `keyof` on Built-in Types

You can also use `keyof` on built-in object types.

```ts
type StringKeys = keyof String;
```

Now TypeScript knows every property and method available on a string.

Examples include:

```text
length
charAt
concat
includes
slice
split
substring
trim
toUpperCase
toLowerCase
replace
repeat
```

Similarly:

```ts
type NumberKeys = keyof Number;
type BooleanKeys = keyof Boolean;
type DateKeys = keyof Date;
type ArrayKeys = keyof Array<any>;
```

> **Note:** `keyof null` and `keyof undefined` evaluate to `never` because they don't have properties.

---

# Why Do Strings Have Methods?

Example:

```ts
const name = "Sujal";

console.log(name.toUpperCase());
```

You might wonder:

> "Strings are primitive values. How can they have methods?"

The answer is **autoboxing**.

---

# Autoboxing

JavaScript automatically creates a temporary wrapper object whenever you access a property or method on a primitive value.

Example:

```ts
const name = "Sujal";

console.log(name.toUpperCase());
```

Internally, JavaScript behaves roughly like this:

```ts
const temp = new String("Sujal");

temp.toUpperCase();
```

The wrapper object uses `String.prototype`, which contains methods like:

* `charAt()`
* `split()`
* `slice()`
* `trim()`
* `replace()`
* `toUpperCase()`
* `toLowerCase()`

After the operation completes, the temporary wrapper object is discarded.

This automatic conversion is called **autoboxing**.

---

# Quick Comparison

| Feature                 | `typeof`              | `keyof`                        |
| ----------------------- | --------------------- | ------------------------------ |
| Available in JavaScript | ✅ Yes                 | ❌ No                           |
| Available in TypeScript | ✅ Yes                 | ✅ Yes                          |
| Works with values       | ✅ Yes                 | ❌ No                           |
| Works with types        | ✅ (in type positions) | ✅ Yes                          |
| Returns                 | Type of a value       | Union of property names (keys) |

---

# Most Common Interview Pattern

```ts
const user = {
    name: "Sujal",
    age: 22
};

type User = typeof user;

type UserKeys = keyof User;
```

Or more commonly:

```ts
type UserKeys = keyof typeof user;
```

Result:

```ts
type UserKeys = "name" | "age";
```

---

# Summary

* JavaScript's `typeof` returns the runtime type of a value.
* TypeScript's `typeof` extracts the type of a value.
* `keyof` returns the property names (keys) of a type.
* `keyof` only works on types, not values.
* To use `keyof` on an object, first get its type using `typeof`.
* Primitive values like strings have methods because JavaScript temporarily wraps them in object wrappers (autoboxing).
