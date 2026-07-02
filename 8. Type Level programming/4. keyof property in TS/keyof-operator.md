## 🧠 What Is `keyof` Operator?

The `keyof` operator is takes a type as input and returns:

> a union of all property keys that TypeScript allows you to access on the value of that type using bracket notation syntax without producing a type error.

---

### in javascript we don't have keyof operator there is only typeof operator there 
### but in TS we've both typeof and keyof operator 

# keyof operator takes the typeof a value then return the all properties of that value 
for example : let a = {name : "sujal", age : 20} 
and we can access the properties of a using a["name"] or a["age"] or a.name or a.age
and if we use a["name"] or a["age"] or a.name or a.age then it will return the value of that property
but if we use a["address"] or a.address then it will give an error because address property is not present in a
so we can use keyof operator to check if a property is present in a or not

# so if we use keyof operator then it will return the all properties of a

let allPropertiesOfA = keyof a;

## 🔑 Basic Example

```ts id="1hq19e"
type User = {
  id: number;
  name: string;
};

type K = keyof User;
```

Result:

```ts id="mjlwm7"
"id" | "name"
```

Because these accesses are allowed:

```ts id="djlwm7"
user["id"]
user["name"]
```

---

## 📚 Array Example

```ts id="8jlwm7"
type K = keyof string[];
```

Result includes:

```ts id="7jlwm7"
number | "length" | "push" | "pop" | ...
```

Because these are valid:

```ts id="6jlwm7"
arr[0]
arr["length"]
arr["push"]
```

---

## 🔢 Number Example

```ts id="5jlwm7"
type K = keyof number;
```

Result:

```ts id="4jlwm7"
"toString" | "toFixed" | ...
```

Because:

```ts id="3jlwm7"
num["toString"]
```

is allowed in TypeScript.

---

## 🧩 `unknown`

```ts id="2jlwm7"
type K = keyof unknown;
```

Result:

```ts id="1jlwm7"
never
```

Because TypeScript does not allow property access on `unknown`:

```ts id="0jlwm7"
x["name"] // error
```

So no keys are considered safe.

---

## 🔥 `any`

```ts id="azjlwm"
type K = keyof any;
```

Result:

```ts id="bzjlwm"
string | number | symbol
```

Because TypeScript allows every property access on `any`:

```ts id="czjlwm"
x["anything"]
x[123]
x[Symbol()]
```

without errors.

---

## 🔥 `never`

```ts id="dzjlwm"
type K = keyof never;
```

Result:

```ts id="ezjlwm"
string | number | symbol
```

Because TypeScript allows bracket-style indexing on `never` without error:

```ts id="fzjlwm"
x["anything"]
x[123]
x[Symbol()]
```

even though dot notation is not allowed:

```ts id="gzjlwm"
x.name // error
```

So according to TypeScript’s indexing rules, all valid property key types are accepted.

---

## ⚠️ Important Distinction

`keyof` is more closely related to:

```ts id="hzjlwm"
obj["key"]
```

than:

```ts id="izjlwm"
obj.key
```

because bracket indexing is the more general property access mechanism in JavaScript and TypeScript.

---

## 🎯 Final Unified Definition

> The `keyof` operator takes a type and returns a union of all property keys that TypeScript allows to be used for bracket-style property access on that type without producing a type error.