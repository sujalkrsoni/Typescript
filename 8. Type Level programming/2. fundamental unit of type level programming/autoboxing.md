# Autoboxing in JavaScript

## What is Autoboxing?

**Autoboxing** is the process where **JavaScript temporarily wraps a primitive value inside its corresponding object** so that you can access properties and methods defined on that object.

Once the operation is complete, the temporary object is **discarded**, and you're back to working with the original primitive value.

> Think of it like renting a power tool for a few seconds. You use it, finish the job, and return it immediately.

---

## Why is Autoboxing Needed?

Primitive values are lightweight and **do not actually have methods**.

However, JavaScript lets you write code like this:

```javascript
const name = "solidifying";

console.log(name.toUpperCase());
```

Even though `"solidifying"` is a primitive string, `.toUpperCase()` still works.

This is possible because of **Autoboxing**.

---

## How Does Autoboxing Work?

Whenever you access a property or call a method on a primitive:

1. JavaScript detects the primitive.
2. It creates a **temporary wrapper object**.
3. The requested property or method is executed.
4. The wrapper object is immediately discarded.

### Wrapper Objects

| Primitive | Temporary Object |
|-----------|------------------|
| `string` | `String` |
| `number` | `Number` |
| `boolean` | `Boolean` |
| `bigint` | `BigInt` |
| `symbol` | `Symbol` |

> `null` and `undefined` **cannot be autoboxed**, which is why accessing properties on them throws an error.

---

## Example

```javascript
const name = "solidifying";

console.log(name.toUpperCase());
```

### Behind the scenes

JavaScript internally does something similar to this:

```javascript
const temp = new String("solidifying");

temp.toUpperCase();

temp = null; // discarded
```

It isn't exactly implemented like this, but conceptually this is what happens.

The output is:

```javascript
SOLIDIFYING
```

---

## Another Example

```javascript
const num = 123.456;

console.log(num.toFixed(2));
```

Behind the scenes:

```javascript
const temp = new Number(123.456);

temp.toFixed(2);

temp = null;
```

Output:

```javascript
123.46
```

---

## One Important Thing to Remember

Since the wrapper object is **temporary**, adding properties to a primitive **doesn't persist**.

```javascript
const str = "hello";

str.language = "English";

console.log(str.language);
```

Output:

```javascript
undefined
```

### Why?

Each time you access `str`, JavaScript creates a **new temporary `String` object**.

```javascript
// First access
new String("hello").language = "English";

// Second access
new String("hello").language; // undefined
```

The object where you stored `language` no longer exists.

---

## Is Autoboxing the Same as Type Coercion?

**No.**

They are different concepts.

### Autoboxing

Converts a **primitive → temporary object**.

```javascript
"hello".toUpperCase();
```

---

### Type Coercion

Converts **one data type into another**.

```javascript
"5" + 1
// "51"

"5" - 1
// 4

Boolean(1)
// true
```

---

## Interview Question

### Q. Why can we call methods on primitive values in JavaScript?

Because JavaScript performs **Autoboxing**. It temporarily wraps the primitive inside its corresponding object (`String`, `Number`, `Boolean`, etc.), executes the method, and then discards the wrapper object.

---

# Key Points

- Primitive values don't actually contain methods.
- JavaScript creates a temporary wrapper object when needed.
- Wrapper objects are discarded immediately after use.
- Supported wrapper objects:
  - `String`
  - `Number`
  - `Boolean`
  - `BigInt`
  - `Symbol`
- `null` and `undefined` cannot be autoboxed.
- Autoboxing is **not** the same as type coercion.

---

# Quick Memory Trick

> **Primitive → Temporary Object → Method Executes → Object Destroyed**

```
"hello"
   │
   ▼
new String("hello")
   │
   ▼
.toUpperCase()
   │
   ▼
"HELLO"
   │
   ▼
Temporary object destroyed
```