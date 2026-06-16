## ❗Non-Null Assertion Operator in TypeScript

The **non-null assertion operator** is written using `!`.

It tells TypeScript:

> "Trust me, this value is not `null` or `undefined` here."

```ts
value!;
```

It only affects **TypeScript checking**.

It does **not** add any runtime safety.

---

## ✅ Basic Example

```ts
let username: string | undefined;

function setUsername() {
  username = "Anurag";
}

setUsername();

console.log(username!.toUpperCase());
```

Here:

```ts
username!;
```

means:

```txt
Trust me, username is not undefined here.
```

TypeScript removes the error and allows the code.

---

## ⚠️ Important

This is safe only when you are **100% sure** the value exists.

```ts
let username: string | undefined;

console.log(username!.toUpperCase());
```

TypeScript allows it.

But at runtime:

```txt
Cannot read properties of undefined
```

can occur.

The `!` operator removes TypeScript's warning, not the actual problem.

---

# Optional Chaining vs Non-Null Assertion

These are completely different features.

Many developers confuse them because both are often used with nullable values.

---

## Non-Null Assertion (!)

```ts
username!.toUpperCase();
```

Meaning:

```txt
I guarantee username exists.
```

TypeScript trusts you.

If you're wrong:

```txt
Runtime Error 💥
```

---

## Optional Chaining (?.)

```ts
username?.toUpperCase();
```

Meaning:

```txt
If username exists,
call toUpperCase()

Otherwise return undefined.
```

No runtime crash.

---

## Example

```ts
let username: string | undefined;

console.log(username?.toUpperCase());
```

Output:

```txt
undefined
```

No error.

No crash.

---

## Visual Difference

### Non-Null Assertion

```ts
username!.toUpperCase();
```

TypeScript sees:

```txt
username is definitely present
```

Runtime:

```ts
username.toUpperCase();
```

If username is undefined:

```txt
💥 Crash
```

---

### Optional Chaining

```ts
username?.toUpperCase();
```

Runtime behaves like:

```ts
if (username != null) {
  username.toUpperCase();
} else {
  undefined;
}
```

If username is undefined:

```txt
✅ Safe
```

---

## Example Comparison

```ts
let user: string | undefined;
```

### Non-Null Assertion

```ts
user!.toUpperCase();
```

TypeScript:

```txt
No Error
```

Runtime:

```txt
Crash if user is undefined
```

---

### Optional Chaining

```ts
user?.toUpperCase();
```

TypeScript:

```txt
No Error
```

Runtime:

```txt
Returns undefined if user is undefined
```

---

# When Should You Use !

Use `!` only when:

* React refs after mounting
* DOM elements you know exist
* Values initialized elsewhere
* Framework guarantees value existence

Example:

```ts
const button =
  document.getElementById("btn")!;

button.addEventListener("click", () => {});
```

You know the element exists.

---

# When Should You Prefer ?.

Most of the time.

```ts
user?.profile?.email
```

Because it is runtime-safe.

It prevents crashes.

---

# Quick Comparison Table

| Feature                  | `!` Non-Null Assertion | `?.` Optional Chaining |
| ------------------------ | ---------------------- | ---------------------- |
| Compile-Time Feature     | ✅                      | ❌                      |
| Runtime Feature          | ❌                      | ✅                      |
| Removes TS Error         | ✅                      | ✅                      |
| Prevents Runtime Crash   | ❌                      | ✅                      |
| Returns undefined Safely | ❌                      | ✅                      |
| Trusts Developer         | ✅                      | ❌                      |
| Safer Option             | ❌                      | ✅                      |

---

# Interview Question

### What is the difference between `!` and `?.`?

**Non-Null Assertion (`!`)** tells TypeScript to ignore `null` and `undefined` checks. It only affects type checking and provides no runtime safety.

**Optional Chaining (`?.`)** performs a runtime check. If the value is `null` or `undefined`, it safely returns `undefined` instead of throwing an error.

---

# Easy Rule to Remember

```txt
!  = "Trust Me"

?. = "Check First"
```

If you're not 100% sure a value exists, prefer:

```ts
user?.name
```

over:

```ts
user!.name
```

because `?.` is runtime-safe while `!` is not.
