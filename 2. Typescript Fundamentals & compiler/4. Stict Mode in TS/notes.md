# TypeScript Strict Mode Notes

## What is Strict Mode?

The `strict` property is a master setting in TypeScript that enables a collection of strict type-checking rules.

Instead of enabling multiple safety options one by one, you can simply set:

```json
{
  "strict": true
}
```

When enabled, TypeScript performs additional checks to catch potential bugs during development.

---

# Why Use Strict Mode?

Without strict mode, TypeScript may allow unsafe code that can cause runtime errors.

With strict mode enabled:

✅ Better type safety

✅ Fewer runtime bugs

✅ Better IntelliSense

✅ Easier maintenance

✅ More reliable code

---

# How strict Works

Think of `strict` as a master switch.

```text
strict: true
      │
      ▼
 ┌──────────────────────┐
 │ strictNullChecks     │
 ├──────────────────────┤
 │ noImplicitAny        │
 ├──────────────────────┤
 │ noImplicitThis       │
 ├──────────────────────┤
 │ strictFunctionTypes  │
 ├──────────────────────┤
 │ strictBindCallApply  │
 ├──────────────────────┤
 │ strictPropertyInit   │
 └──────────────────────┘
```

When `strict` is enabled, TypeScript automatically enables these safety checks behind the scenes.

---

# strict Property

## Definition

The `strict` property enables all major strict type-checking options.

```json
{
  "strict": true
}
```

---

## Example

### Without Strict Mode

```ts
let age;

age = 25;
age = "Sujal";
```

No error because TypeScript infers `any`.

---

### With Strict Mode

```ts
let age;

age = 25;
age = "Sujal";
```

TypeScript reports errors because unsafe types are detected.

---

## Remember

**strict = Enable all important TypeScript safety checks.**

---

# strictNullChecks

## Definition

The `strictNullChecks` property makes TypeScript treat:

* `null`
* `undefined`

as separate types.

When enabled, TypeScript will not allow them unless explicitly specified.

---

## Without strictNullChecks

```ts
let name: string = null;
```

No error.

This can cause runtime crashes.

---

## With strictNullChecks

```ts
let name: string = null;
```

Error:

```text
Type 'null' is not assignable to type 'string'
```

---

## Correct Way

```ts
let name: string | null = null;
```

Now TypeScript knows the variable can contain either:

* string
* null

---

## Real World Example

### Problem

```ts
const user = null;

console.log(user.name);
```

Runtime Error:

```text
Cannot read properties of null
```

---

### Solution

With `strictNullChecks`, TypeScript catches this issue during development.

---

## Remember

**strictNullChecks prevents null and undefined related bugs.**

---

# noImplicitAny

## Definition

The `noImplicitAny` property prevents TypeScript from automatically assigning the `any` type.

---

## What is any?

The `any` type disables TypeScript checking.

```ts
let value: any;

value = 10;
value = "Hello";
value = true;
```

Anything is allowed.

This removes TypeScript's safety benefits.

---

## Without noImplicitAny

```ts
function greet(name) {
  return "Hello " + name;
}
```

TypeScript silently treats:

```ts
name: any
```

No error.

---

## With noImplicitAny

```ts
function greet(name) {
  return "Hello " + name;
}
```

Error:

```text
Parameter 'name' implicitly has an 'any' type.
```

---

## Correct Way

```ts
function greet(name: string) {
  return "Hello " + name;
}
```

Now TypeScript knows exactly what type is expected.

---

## Benefits

* Better type checking
* Better auto-completion
* Easier debugging
* More maintainable code

---

## Remember

**noImplicitAny forces developers to explicitly define missing types.**

---

# sourceMap

## Definition

The `sourceMap` property tells TypeScript to generate source map files when compiling.

```json
{
  "sourceMap": true
}
```

These map files help the browser connect the compiled JavaScript back to the original TypeScript code.

---

## Why Use sourceMap?

When `sourceMap` is enabled, you can debug the TypeScript file directly in the browser devtools instead of only seeing the generated JavaScript.

This makes debugging much easier because breakpoints and error traces point to the `.ts` file.

---

## Example

If your TypeScript file compiles to JavaScript, TypeScript also creates a `.map` file.

The browser uses that `.map` file to show the original TypeScript during debugging.

---

## Remember

**sourceMap = Let the browser debug the original TypeScript code.**

---

# Relationship Between strict and These Options

Consider this configuration:

```json
{
  "strict": true
}
```

TypeScript automatically enables:

```json
{
  "strict": true,
  "strictNullChecks": true,
  "noImplicitAny": true
}
```

along with several other strict checks.

---

# Visual Representation

```text
strict
  │
  ├── strictNullChecks
  │
  ├── noImplicitAny
  │
  ├── noImplicitThis
  │
  ├── strictFunctionTypes
  │
  ├── strictBindCallApply
  │
  └── strictPropertyInitialization
```

---

# Should We Enable strict?

### Small Learning Projects

```json
{
  "strict": false
}
```

Can be acceptable while learning.

---

### Professional Projects

```json
{
  "strict": true
}
```

Recommended.

Most companies use strict mode because it helps catch bugs early.

---

# Interview Question

## Q. What does strict mode do in TypeScript?

### Answer

The `strict` option is a master setting that enables multiple strict type-checking rules such as `strictNullChecks`, `noImplicitAny`, `noImplicitThis`, and others. It improves type safety, catches bugs during development, and helps developers write more reliable code.

---

# Quick Revision

| Property         | Purpose                                     |
| ---------------- | ------------------------------------------- |
| strict           | Enables all major strict checks             |
| strictNullChecks | Treats null and undefined as separate types |
| noImplicitAny    | Prevents automatic any type inference       |

---

# One-Line Summary

**`strict` is TypeScript's master safety switch that enables multiple type-checking rules to catch bugs early and improve code reliability.**
