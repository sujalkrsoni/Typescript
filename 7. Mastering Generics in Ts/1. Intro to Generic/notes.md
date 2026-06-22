## Generics in TypeScript (Easy Notes)

### What is a Generic?

A **Generic** is a type that is **not fixed**.

Instead of writing the same code again and again for different types, we use a generic and pass the type later.

```ts
type FormData<T> = {
  isValid: boolean;
  data: T;
};
```

Here, `T` is a generic type parameter.

You can replace `T` with any type:

```ts
FormData<RegisterFormData>
FormData<LoginFormData>
FormData<PostFormData>
```

---

### Why Use Generics?

Without Generics ❌

```ts
type RegisterForm = {
  isValid: boolean;
  data: RegisterFormData;
};

type LoginForm = {
  isValid: boolean;
  data: LoginFormData;
};
```

Lots of repeated code.

With Generics ✅

```ts
type FormData<T> = {
  isValid: boolean;
  data: T;
};
```

One reusable type works for all forms.

---

### How It Works

```ts
const registerForm: FormData<RegisterFormData>
```

TypeScript replaces:

```ts
T = RegisterFormData
```

So it becomes:

```ts
{
  isValid: boolean;
  data: RegisterFormData;
}
```

---

## Type vs Interface

### Type

```ts
type User = {
  name: string;
  age: number;
};
```

* Can create object types.
* Supports Union (`|`) and Intersection (`&`).
* More flexible.

### Interface

```ts
interface User {
  name: string;
  age: number;
}
```

* Mainly used for object shapes.
* Supports declaration merging.
* Often used for classes and APIs.

---

## Generic with Type

```ts
type Box<T> = {
  value: T;
};
```

```ts
const num: Box<number> = {
  value: 10,
};
```

---

## Generic with Interface

```ts
interface Box<T> {
  value: T;
}
```

```ts
const str: Box<string> = {
  value: "Hello",
};
```

---

## Quick Summary

| Concept             | Meaning                             |
| ------------------- | ----------------------------------- |
| Type                | Creates a custom type               |
| Interface           | Defines object structure            |
| Generic             | Makes a type dynamic and reusable   |
| `T`                 | Placeholder for any type            |
| Benefit of Generics | Reuse code for different data types |

### One-Line Definition

> **Generic = A dynamic type placeholder (`T`) that lets us write reusable and type-safe code.** 🚀
