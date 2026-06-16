# Const Assertions (`as const`)

## What is `as const`?

`as const` is a special type assertion that tells TypeScript:

> "Make this value as specific and immutable as possible."

Example:

```ts
const myArray = [1, 2, 3] as const;
```

TypeScript infers:

```ts
readonly [1, 2, 3]
```

instead of:

```ts
number[]
```

---

# Normal Inference vs Const Assertion

Without `as const`:

```ts
const myArray = [1, 2, 3];
```

Type:

```ts
number[]
```

Meaning:

```ts
myArray[0] = 100; // ✅ Allowed
```

---

With `as const`:

```ts
const myArray = [1, 2, 3] as const;
```

Type:

```ts
readonly [1, 2, 3]
```

Meaning:

```ts
myArray[0] = 100;
```

Error:

```txt
Cannot assign to '0' because it is a read-only property.
```

---

# Why Does This Happen?

Normally TypeScript thinks:

```ts
1
```

could later become:

```ts
2
3
100
```

So it widens the type to:

```ts
number
```

---

With `as const`:

```ts
const value = 1 as const;
```

TypeScript says:

> "No, this value will always be exactly 1."

Type:

```ts
1
```

Not:

```ts
number
```

---

# Literal Types

Without const assertion:

```ts
const name = "sujal";
```

Type:

```ts
"sujal"
```

Because primitive `const` values are already inferred as literals.

---

But:

```ts
let name = "sujal";
```

Type:

```ts
string
```

Because:

```ts
name = "rahul";
```

is allowed.

---

Think:

```txt
const
↓
Won't change
↓
Literal Type

let
↓
May change
↓
Broader Type
```

---

# Primitive Example

```ts
const age = 25;
```

Type:

```ts
25
```

---

```ts
let age = 25;
```

Type:

```ts
number
```

---

# Non-Primitive Example (Objects)

This is where many developers get confused.

Consider:

```ts
const user = {
  name: "sujal",
  age: 25
};
```

Type:

```ts
{
  name: string;
  age: number;
}
```

Notice:

```ts
"sujal"
```

became:

```ts
string
```

and:

```ts
25
```

became:

```ts
number
```

---

Why?

Because even though the variable is `const`:

```ts
user.name = "rahul";
```

is still allowed.

The object itself is mutable.

---

Important:

```ts
const user = {};
```

means:

```txt
Cannot reassign user
```

NOT

```txt
Cannot modify user
```

---

Example:

```ts
const user = {
  name: "sujal"
};

user.name = "rahul"; // ✅ Allowed
```

---

# With `as const`

```ts
const user = {
  name: "sujal",
  age: 25
} as const;
```

Type becomes:

```ts
{
  readonly name: "sujal";
  readonly age: 25;
}
```

Now:

```ts
user.name = "rahul";
```

Error:

```txt
Cannot assign to 'name'
```

---

# Nested Objects

`as const` also affects nested objects.

Example:

```ts
const user = {
  name: "sujal",
  profile: {
    city: "Delhi"
  }
} as const;
```

Type:

```ts
{
  readonly name: "sujal";
  readonly profile: {
    readonly city: "Delhi";
  };
}
```

Now:

```ts
user.profile.city = "Mumbai";
```

Error.

---

# Arrays Become Tuples

Without `as const`:

```ts
const arr = [1, 2, 3];
```

Type:

```ts
number[]
```

---

With `as const`:

```ts
const arr = [1, 2, 3] as const;
```

Type:

```ts
readonly [1, 2, 3]
```

This is a readonly tuple.

---

# Tuple Example

```ts
const userData = ["sujal", 25, true] as const;
```

Type:

```ts
readonly ["sujal", 25, true]
```

Access:

```ts
userData[0];
```

Type:

```ts
"sujal"
```

Not:

```ts
string
```

---

# `const` vs `as const`

This is a favorite interview question.

```ts
const user = {
  name: "sujal"
};
```

Means:

```txt
Variable cannot be reassigned
Object can be modified
```

---

```ts
const user = {
  name: "sujal"
} as const;
```

Means:

```txt
Variable cannot be reassigned
Object cannot be modified
Properties become readonly
Literal types are preserved
```

---

# Visual Diagram

```txt
const user = {
  name: "sujal"
}

          const
             │
             ▼
      Cannot Reassign
             │
             ▼
      Can Modify Properties



const user = {
  name: "sujal"
} as const

         as const
             │
             ▼
      Cannot Reassign
             │
             ▼
     Cannot Modify Properties
             │
             ▼
       Readonly + Literals
```

---

# One-Line Summary

```txt
const      → Prevents reassignment
as const   → Prevents mutation + preserves literal types
```
