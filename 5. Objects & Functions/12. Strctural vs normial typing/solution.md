```ts
const obj: {} = "sujal";
```

Here it will work because `"sujal"` is a string, and string has multiple properties and methods like:

```ts
"sujal".toLowerCase();
"sujal".split("");
```

These methods are coming from `String.prototype`.

Same thing happens with other types like:

* string
* number
* boolean
* symbol
* array
* object
* NaN (because it is still a number)

All of them have properties/methods available through their prototype chain, so they are considered non-nullish values and can be assigned to `{}`.

But in the case of `null` and `undefined`, there are no properties or prototype methods available on them.

```ts
const obj: {} = null;      // Error
const obj: {} = undefined; // Error
```

That's why `{}` basically means:

> Any value except `null` and `undefined`.

---

This is very similar to:

```ts
const obj: Object = "sujal";
```

or

```ts
const obj: Object = 123;
const obj: Object = true;
```

But:

```ts
const obj: Object = null;      // Error
const obj: Object = undefined; // Error
```

⚠️ Make sure it is `Object` (capital O). `object` (small o) behaves differently.

---

```ts
const obj: object = { name: "sujal" };
const arr: object = [1, 2, 3, 4];
```

Here it will work because `object` only accepts non-primitive values.

So objects, arrays, functions, etc. are allowed.

But primitive values are not allowed:

```ts
const obj: object = "sujal"; // Error
const num: object = 123;     // Error
const bool: object = true;   // Error
```

because primitives are not considered objects in TypeScript.

So:

{}       -> Any value except null and undefined

Object   -> Almost same as {}

object   -> Only non-primitive values

---

One more interesting thing to note:

`{}` represents all values except `null` and `undefined`.

So if you create a union like this:

```ts
type T = {} | null | undefined;
```

it becomes equivalent to `unknown`, because `{}` already covers every possible value except `null` and `undefined`, and the union adds those remaining two values as well.

```ts
{} // Everything except null and undefined
{} | null | undefined // Everything
unknown // Everything
```

If you hover over the type `T` in VS Code, TypeScript will not simplify and display it as `unknown`. It will still show like `{} | null | undefined`.

However, from a type-system perspective, both represent the same set of possible values.

```
```
