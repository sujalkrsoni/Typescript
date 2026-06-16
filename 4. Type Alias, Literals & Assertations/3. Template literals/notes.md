# TypeScript Template Literal Types (Interview + Advanced Notes)

---

# What are Template Literal Types?

Template Literal Types allow us to create new string literal types using template string syntax.

```ts
type Role = "admin" | "user";

type UserRole = `role-${Role}`;
```

Result:

```ts
type UserRole =
  | "role-admin"
  | "role-user";
```

---

# Why Use Them?

Instead of manually writing:

```ts
type Event =
  | "nameChanged"
  | "emailChanged"
  | "ageChanged";
```

We can generate them automatically:

```ts
type Fields =
  | "name"
  | "email"
  | "age";

type Event = `${Fields}Changed`;
```

---

# Cross Product Behavior ⭐

```ts
type Lang = "en" | "fr";

type Page = "home" | "about";

type Route = `${Lang}-${Page}`;
```

Result:

```ts
"en-home"
"en-about"
"fr-home"
"fr-about"
```

Template Literal Types generate all possible combinations.

---

# Real World Examples

## API Routes

```ts
type Resource =
  | "users"
  | "products";

type ApiRoute =
  `/api/${Resource}`;
```

Result:

```ts
"/api/users"
"/api/products"
```

---

## Event Names

```ts
type Property =
  | "name"
  | "email";

type Event =
  `${Property}Changed`;
```

Result:

```ts
"nameChanged"
"emailChanged"
```

---

# Built-in String Utilities

## Uppercase

```ts
type A = Uppercase<"sujal">;
```

Result:

```ts
"SUJAL"
```

---

## Lowercase

```ts
type A = Lowercase<"SUJAL">;
```

Result:

```ts
"sujal"
```

---

## Capitalize

```ts
type A = Capitalize<"sujal">;
```

Result:

```ts
"Sujal"
```

---

## Uncapitalize

```ts
type A = Uncapitalize<"Sujal">;
```

Result:

```ts
"sujal"
```

---

# Template Literals + keyof ⭐

```ts
interface User {
  name: string;
  email: string;
}
```

```ts
type Events =
  `${keyof User}Changed`;
```

Result:

```ts
"nameChanged"
"emailChanged"
```

Used heavily in libraries.

---

# Advanced: infer (Senior Level)

Extract data from strings at type level.

```ts
type ExtractId<T> =
  T extends `user-${infer Id}`
    ? Id
    : never;
```

Usage:

```ts
type A = ExtractId<"user-123">;
```

Result:

```ts
"123"
```

TypeScript is parsing strings during compilation.

---

# Runtime Behavior ⚠️

```ts
type Route =
  `/api/${string}`;
```

After compilation:

```js
// Nothing generated
```

Template Literal Types are:

✅ Compile Time Only

❌ Runtime

❌ JavaScript Output

Just like Literal Types.

---

# Interview Questions

### Q1. What are Template Literal Types?

Template Literal Types generate new string literal types using template string syntax and existing literal types.

---

### Q2. Do Template Literal Types exist at runtime?

No.

They are completely removed during compilation and do not generate JavaScript code.

---

### Q3. What is the most common use case?

* Event names
* API routes
* Dynamic property names
* Library type generation

---

# Quick Revision 🚀

```txt
Literal Types
↓
Union Types
↓
Template Literal Types
↓
keyof
↓
Mapped Types
↓
Conditional Types
↓
infer
```

### Remember

Literal Types → Exact Values

Template Literal Types → Generate New String Types

infer → Extract Information From Types

Template Literal Types + infer = Type-Level String Parsing

Everything happens at Compile Time Only.
