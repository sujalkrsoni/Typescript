# Union (`|`) vs Intersection (`&`) with Objects

```ts
type Person1 = {
    name: string;
    age: number;
}

type Person2 = {
    name: string;
    age: string;
}
```

---

## Union Type (`|`)

A union means:

> The value can satisfy **either type**.

```ts
let obj1: Person1 | Person2 = {
    name: "sujal",
    age: "22"
};
```

✅ Valid because `age` can be:

* `number` (Person1)
* `string` (Person2)

```ts
age: 22     // ✅
age: "22"   // ✅
```

---

## Intersection Type (`&`)

An intersection means:

> The value must satisfy **both types at the same time**.

```ts
let obj2: Person1 & Person2 = {
    name: "sujal",
    age: 22
};
```

❌ Error

Why?

```ts
age: number & string
```

A value cannot be both a `number` and a `string` at the same time.

So TypeScript resolves it to:

```ts
age: never
```

Meaning:

```ts
age: 22      // ❌
age: "22"    // ❌
```

And if you remove `age`:

```ts
let obj2: Person1 & Person2 = {
    name: "sujal"
}
```

❌ Error because `age` is required.

---

## Interface `extends` Conflict

```ts
interface IPerson1 {
    name: string;
    age: string;
}

interface IPerson2 extends IPerson1 {
    age: number;
}
```

❌ Error

Why?

`extends` does **not allow overriding a property with an incompatible type**.

```ts
age: string  // Parent
age: number  // Child ❌
```

So interface inheritance fails immediately.

---

## Quick Summary

| Type                 | Meaning                                         |
| -------------------- | ----------------------------------------------- |
| `Person1 \| Person2` | Either type                                     |
| `Person1 & Person2`  | Both types together                             |
| `number & string`    | `never`                                         |
| Interface `extends`  | Cannot override property with incompatible type |
