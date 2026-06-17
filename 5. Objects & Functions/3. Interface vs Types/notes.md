# TypeScript Interface Notes

## What is an Interface?

An **Interface** is used to define the **structure (shape) of an object**.

It tells TypeScript:

> "Any object that follows this interface must contain these properties with these types."

```ts
interface User {
    name: string;
    age: number;
    email: string;
}

const user: User = {
    name: "Sujal",
    age: 22,
    email: "sujal@gmail.com"
};
```

---

# Why Use Interfaces?

✅ Better readability for object structures

✅ Supports Declaration Merging

✅ Supports Inheritance (`extends`)

✅ Commonly used with Classes

✅ Great for API response structures

✅ Recommended for Object Shapes

---

# Declaration Merging

One special feature of interfaces is **Declaration Merging**.

If multiple interfaces have the same name, TypeScript automatically combines them.

```ts
interface User {
    name: string;
}

interface User {
    age: number;
}

const user: User = {
    name: "Sujal",
    age: 22
};
```

TypeScript internally treats it as:

```ts
interface User {
    name: string;
    age: number;
}
```

---

## Real Example

```ts
interface IUser {
    name: string;
    age: number;
    email: string;
}

interface IUser {
    address: {
        houseNo: number;
        area: string;
        city: string;
        country: string;
    };
}

const user: IUser = {
    name: "Sujal",
    age: 22,
    email: "sujal@gmail.com",

    address: {
        houseNo: 123,
        area: "ABC",
        city: "Delhi",
        country: "India"
    }
};
```

This behavior is called **Declaration Merging**.

---

# Extending Interfaces

Interfaces can inherit properties from other interfaces using the `extends` keyword.

```ts
interface IUser {
    name: string;
    age: number;
    email: string;
}

interface IAddress {
    houseNo: number;
    city: string;
    country: string;
}

interface IUserWithAddress extends IUser, IAddress {}

const user: IUserWithAddress = {
    name: "Sujal",
    age: 22,
    email: "sujal@gmail.com",

    houseNo: 123,
    city: "Delhi",
    country: "India"
};
```

---

# Interface with Functions

Interfaces can describe function signatures.

```ts
interface Add {
    (a: number, b: number): number;
}

const sum: Add = (a, b) => a + b;
```

---

# Interface with Methods

```ts
interface IUser {
    name: string;

    greet(): void;
}

const user: IUser = {
    name: "Sujal",

    greet() {
        console.log("Hello");
    }
};
```

---

# Interface with Classes

Interfaces are commonly used with classes.

```ts
interface IUser {
    name: string;
    age: number;
}

class User implements IUser {
    constructor(
        public name: string,
        public age: number
    ) {}
}
```

---

# Interface vs Type Alias (Object Literal)

## Interface

```ts
interface User {
    name: string;
    age: number;
}
```

## Type Alias

```ts
type User = {
    name: string;
    age: number;
};
```

Both create object shapes, but there are important differences.

---

# Difference Between Interface and Type Alias

| Feature                   | Interface         | Type Alias      |
| ------------------------- | ----------------- | --------------- |
| Object Shape              | ✅ Best Choice     | ✅ Possible      |
| Declaration Merging       | ✅ Supported       | ❌ Not Supported |
| Duplicate Names           | ✅ Allowed         | ❌ Error         |
| Extends                   | ✅ Using `extends` | ✅ Using `&`     |
| Classes (`implements`)    | ✅ Common          | ✅ Possible      |
| Primitive Types           | ❌ Not Supported   | ✅ Supported     |
| Union Types               | ❌ Not Supported   | ✅ Supported     |
| Tuple Types               | ❌ Not Supported   | ✅ Supported     |
| Advanced Type Composition | ❌ Limited         | ✅ Powerful      |

---

# Type Alias Examples

## Primitive Type Alias

```ts
type UserName = string;
type Age = number;
```

Interfaces cannot do this.

---

## Union Types

```ts
type Status = "success" | "error" | "loading";
```

Interfaces cannot create unions.

---

## Tuple Types

```ts
type UserTuple = [string, number];
```

Interfaces cannot directly create tuples.

---

## Combining Types using Intersection

```ts
type TUser = {
    name: string;
    age: number;
};

type TAddress = {
    city: string;
    country: string;
};

type TUserWithAddress = TUser & TAddress;

const user: TUserWithAddress = {
    name: "Sujal",
    age: 22,
    city: "Delhi",
    country: "India"
};
```

---

# Interface vs Type Alias Syntax

### Interface

```ts
interface User {
    name: string;
    age: number;
}
```

### Type Alias

```ts
type User = {
    name: string;
    age: number;
};
```

### Interface Extension

```ts
interface User {
    name: string;
}

interface Address {
    city: string;
}

interface UserWithAddress extends User, Address {}
```

### Type Extension

```ts
type User = {
    name: string;
};

type Address = {
    city: string;
};

type UserWithAddress = User & Address;
```

---

# Interview Questions

## Q1. Can we create multiple Interfaces with the same name?

✅ Yes

Because interfaces support Declaration Merging.

```ts
interface User {
    name: string;
}

interface User {
    age: number;
}
```

---

## Q2. Can we create multiple Types with the same name?

❌ No

```ts
type User = {
    name: string;
};

type User = {
    age: number;
};
```

Error:

```txt
Duplicate identifier 'User'
```

---

## Q3. Which should I use?

### Use Interface When:

* Creating object structures
* Working with classes
* Designing APIs
* Large-scale applications
* You need declaration merging

```ts
interface User {
    name: string;
    age: number;
}
```

---

### Use Type Alias When:

* Creating Union Types
* Creating Tuple Types
* Creating Primitive Aliases
* Advanced Type Manipulation

```ts
type Status = "success" | "error";

type UserTuple = [string, number];
```

---

# My Class Notes

## Interface

```txt
✔ Used to define object structure
✔ Supports declaration merging
✔ Supports extends
✔ Best for object shapes
✔ Commonly used with classes
✔ Duplicate names are allowed
```

---

## Type Alias

```txt
✔ Can create objects
✔ Can create primitives
✔ Can create unions
✔ Can create tuples
✔ Uses & (intersection) for combining types
✔ Duplicate names are NOT allowed
```

---

# Rule of Thumb

```txt
Object Shape            → Interface

API Response Shape      → Interface

Class Contracts         → Interface

Primitive Alias         → Type

Union Types             → Type

Tuple Types             → Type

Advanced Type Logic     → Type
```

---

# Important Correction

❌ Wrong:

"Always use Interface because Intersection Types are slow."

✅ Correct:

```txt
Use Interface for object structures because it is more readable and supports declaration merging.

Use Type Alias when you need unions, tuples, primitive aliases, or advanced type compositions.

Performance differences are usually negligible in real-world applications.
```
