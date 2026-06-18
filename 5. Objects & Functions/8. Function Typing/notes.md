# Function Return Types in TypeScript

TypeScript can automatically infer a function's return type, but sometimes it's useful to explicitly define it for better readability and type safety.

---

# 1. Auto Type Inference

TypeScript automatically detects the return type based on the value returned from the function.

```ts
function add(a: number, b: number) {
  return a + b;
}

const result = add(10, 5);
```

TypeScript infers:

```ts
function add(a: number, b: number): number
```

Because `a + b` returns a number.

### Example

```ts
function isGreater(a: number, b: number) {
  return a > b;
}
```

TypeScript infers:

```ts
function isGreater(a: number, b: number): boolean
```

---

## My Class Notes

✅ TypeScript can infer return types automatically.

✅ For small functions, inference is usually enough.

✅ For large projects, exported functions, APIs, and libraries, explicit return types improve readability and maintainability.

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

---

# 2. `void` Return Type

`void` means:

> "This function does not return any useful value."

```ts
function printUpperCase(str: string): void {
  console.log(str.toUpperCase());
}
```

Even though JavaScript returns `undefined` behind the scenes, TypeScript treats the function as returning `void`.

---

### Example

```ts
function greet(): void {
  console.log("Hello");
}
```

```ts
const result = greet();

console.log(result); // undefined
```

---

## When to Use `void`

Use `void` when the function is only performing an action:

* Logging
* Printing
* Updating UI
* Updating Database
* Sending Emails
* API Calls
* Side Effects

```ts
function saveUser(): void {
  console.log("User Saved");
}
```

---

## My Class Notes

Think of `void` as:

```txt
"I don't need any value back from this function."
```

The function finishes successfully but doesn't provide a meaningful return value.

---

# 3. `undefined` Return Type

`undefined` means:

> "This function specifically returns the value `undefined`."

```ts
function getNothing(): undefined {
  return undefined;
}
```

---

## Difference from `void`

```ts
function a(): void {}

function b(): undefined {
  return undefined;
}
```

### `void`

```txt
I don't care what gets returned.
```

### `undefined`

```txt
I must return undefined.
```

---

### Example

```ts
function test(): undefined {
  return undefined;
}
```

❌ Error

```ts
function test(): undefined {
}
```

Because TypeScript expects:

```ts
return undefined;
```

---

## My Class Notes

`undefined` is rarely used.

Most of the time:

```ts
void
```

is the better choice.

---

# 4. `never` Return Type

`never` means:

> "This function never successfully completes."

The function either:

1. Throws an error
2. Runs forever

---

## Example 1: Throwing Error

```ts
function throwError(): never {
  throw new Error("Error Occurred");
}
```

Execution stops immediately.

```ts
const result = throwError();
```

`result` can never contain a value.

---

## Example 2: Infinite Loop

```ts
function infiniteLoop(): never {
  while (true) {
    console.log("Hello World");
  }
}
```

The function never reaches its end.

---

## My Class Notes

Use `never` when:

* Function always throws an error
* Function never terminates
* Handling impossible conditions

Example:

```ts
function fail(message: string): never {
  throw new Error(message);
}
```

---

# `void` vs `never`

### `void`

```ts
function greet(): void {
  console.log("Hello");
}
```

```ts
greet();
console.log("Program continues");
```

✅ Program continues normally.

---

### `never`

```ts
function crash(): never {
  throw new Error("Boom!");
}
```

```ts
crash();
console.log("This line never runs");
```

❌ Execution never reaches the next line.

---

## Comparison Table

| Feature                         | `void` | `never` |
| ------------------------------- | ------ | ------- |
| Function completes successfully | ✅      | ❌       |
| Returns normally                | ✅      | ❌       |
| Used for side effects           | ✅      | ❌       |
| Used for errors                 | ❌      | ✅       |
| Used for infinite loops         | ❌      | ✅       |

---

# `void` vs `undefined`

| Feature                  | `void`               | `undefined`             |
| ------------------------ | -------------------- | ----------------------- |
| Meaning                  | Return value ignored | Must return `undefined` |
| Common Usage             | Very Common          | Rare                    |
| Explicit Return Required | ❌ No                 | ✅ Yes                   |
| Used for Side Effects    | ✅ Yes                | ❌ No                    |

Example:

```ts
function a(): void {}

function b(): undefined {
  return undefined;
}
```

---

# `undefined` vs `never`

| Feature           | `undefined`   | `never`    |
| ----------------- | ------------- | ---------- |
| Has a Value       | ✅ `undefined` | ❌ No Value |
| Function Finishes | ✅ Yes         | ❌ No       |
| Returns Normally  | ✅ Yes         | ❌ No       |
| Common Usage      | Rare          | Rare       |

---

# Real-World Examples

### Returning Data

```ts
function getUserId(): number {
  return 101;
}
```

### Performing an Action

```ts
function logMessage(message: string): void {
  console.log(message);
}
```

### Explicitly Returning Undefined

```ts
function getNothing(): undefined {
  return undefined;
}
```

### Throwing an Error

```ts
function throwError(): never {
  throw new Error("Something went wrong");
}
```

### Infinite Process

```ts
function startServer(): never {
  while (true) {
    // Server running forever
  }
}
```

---

# Quick Interview Answer

### When should I use `void`?

When a function performs an action and doesn't need to return anything useful.

```ts
function logMessage(msg: string): void {
  console.log(msg);
}
```

---

### When should I use `never`?

When a function can never finish normally.

```ts
function throwError(): never {
  throw new Error("Something went wrong");
}
```

---

### When should I use `undefined`?

When the function is specifically designed to return `undefined`.

```ts
function getValue(): undefined {
  return undefined;
}
```

---

### Should I always write return types?

❌ No.

For simple functions:

```ts
function add(a: number, b: number) {
  return a + b;
}
```

TypeScript inference is enough.

✅ In large projects, APIs, libraries, and exported functions, explicit return types are recommended.

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

---

# Final Rule of Thumb

```txt
Returns useful value      → number / string / boolean / object / custom type

Returns nothing useful    → void

Returns only undefined    → undefined

Never returns             → never

Small functions           → Auto Type Inference

Large projects/APIs       → Explicit Return Types
```
