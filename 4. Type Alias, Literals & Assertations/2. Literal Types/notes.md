# TypeScript Notes: Literal Types, Union (Collective) Types & Enums

---

# 1. Literal Types

## What are Literal Types?

A Literal Type represents an exact value instead of a general type.

Example:

```ts
let direction: "left" | "right";

direction = "left";   // ✅
direction = "right";  // ✅
direction = "up";     // ❌ Error
```

Here `"left"` and `"right"` are literal types.

---

## Why Use Literal Types?

* Better type safety
* Prevent invalid values
* Better autocomplete
* More predictable code

Example:

```ts
type Theme = "light" | "dark";

let currentTheme: Theme = "dark";
```

---

## Number Literal Types

```ts
let dice: 1 | 2 | 3 | 4 | 5 | 6;

dice = 4; // ✅
dice = 8; // ❌
```

---

## Boolean Literal Types

```ts
let status: true;

status = true;  // ✅
status = false; // ❌
```

---

## Runtime Behavior

TypeScript:

```ts
type Direction = "left" | "right";

let move: Direction = "left";
```

JavaScript Output:

```js
let move = "left";
```

The type completely disappears.

### Important

Literal Types exist only during type checking.

They do NOT exist at runtime.

---

# 2. Literal Type Inference with const

## const Variables

```ts
const name = "Sujal";
```

TypeScript infers:

```ts
const name: "Sujal";
```

Because the value cannot change.

---

```ts
const age = 20;
```

Type:

```ts
20
```

Literal Type ✅

---

```ts
const isAdmin = true;
```

Type:

```ts
true
```

Literal Type ✅

---

## let Variables

```ts
let name = "Sujal";
```

TypeScript infers:

```ts
string
```

NOT:

```ts
"Sujal"
```

Because the value may change later.

---

## Objects with const

```ts
const user = {
  name: "Sujal"
};
```

Type:

```ts
{
  name: string
}
```

Not:

```ts
{
  name: "Sujal"
}
```

---

## Using as const

```ts
const user = {
  name: "Sujal"
} as const;
```

Type:

```ts
{
  readonly name: "Sujal"
}
```

Now the property becomes a literal type.

---

# 3. Union Types (Collective Types)

A Union Type combines multiple types using the | operator.

Example:

```ts
type Id = string | number;
```

Meaning:

```txt
Value can be:
✓ string
✓ number
```

---

## Example

```ts
let id: string | number;

id = "EMP101"; // ✅
id = 101;      // ✅
id = true;     // ❌
```

---

## Union of Literal Types

```ts
type Direction =
  | "left"
  | "right"
  | "up"
  | "down";
```

This is a union of literal types.

---

## Real World Example

```ts
type UserRole =
  | "admin"
  | "user"
  | "guest";
```

Only these values are allowed.

---

# 4. Enums

## What is an Enum?

Enums are named constants that exist at both compile time and runtime.

Example:

```ts
enum Direction {
  Left,
  Right,
  Up,
  Down
}
```

Usage:

```ts
let move = Direction.Left;
```

---

## String Enum

```ts
enum Role {
  Admin = "admin",
  User = "user",
  Guest = "guest"
}
```

---

## Runtime Behavior

TypeScript:

```ts
enum Direction {
  Left,
  Right
}
```

JavaScript Output:

```js
var Direction;

(function (Direction) {
  Direction[Direction["Left"] = 0] = "Left";
  Direction[Direction["Right"] = 1] = "Right";
})(Direction || (Direction = {}));
```

TypeScript generates a real JavaScript object.

---

## Runtime Example

```ts
console.log(Direction);
```

Output:

```js
{
  0: "Left",
  1: "Right",
  Left: 0,
  Right: 1
}
```

Enums exist at runtime.

---

# 5. Enum vs Literal Types

| Feature                  | Literal Types | Enum            |
| ------------------------ | ------------- | --------------- |
| Compile Time             | ✅             | ✅               |
| Runtime                  | ❌             | ✅               |
| Generates JS Code        | ❌             | ✅               |
| Exists in JS Output      | ❌             | ✅               |
| Bundle Size              | Smaller       | Larger          |
| Performance Cost         | Lower         | Slightly Higher |
| Type Safety              | ✅             | ✅               |
| Runtime Object Available | ❌             | ✅               |
| Modern TS Preference     | ✅             | Sometimes       |

---

# When to Use Literal Types?

```ts
type Role =
  | "admin"
  | "user"
  | "guest";
```

Use when you only need:

* Type safety
* Validation
* Autocomplete

No runtime object needed.

---

# When to Use Enum?

```ts
enum Status {
  Pending,
  Success,
  Failed
}
```

Use when you need:

* Runtime values
* Named constants
* Enum object access

---

# Quick Revision

Literal Types

* Exact values
* Compile-time only
* Removed from JavaScript

Union Types

* Combine multiple types using |

Enums

* Named constants
* Compile-time + Runtime
* Generate JavaScript code

Remember:

Literal Types → Compile Time Only

Union Types → Combine Multiple Types

Enums → Compile Time + Runtime
