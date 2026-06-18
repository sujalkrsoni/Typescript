# TypeScript `moduleDetection` Options

The `moduleDetection` option tells TypeScript:

> "How should I decide whether a file is a Module or just a Script?"

---

## Why Does This Matter?

A **Module** has its own private scope.

A **Script** shares the global scope.

```ts
// file1.ts
const username = "Sujal";
```

```ts
// file2.ts
const username = "John";
```

If both files are treated as **Scripts**, TypeScript may complain because both variables exist in the global scope.

If they are treated as **Modules**, each file gets its own scope and there is no conflict.

---

# 1. `legacy` (Old Behavior)

This was the default behavior before TypeScript 4.7.

A file is considered a **Module** only if it contains:

* `import`
* `export`

Otherwise, TypeScript treats it as a **Script**.

```ts
// user.ts

const username = "Sujal";
```

Since there is no `import` or `export`, this file becomes a Script.

---

## Common Fix in Legacy Mode

Developers often add:

```ts
export {};
```

just to force TypeScript to treat the file as a Module.

```ts
const username = "Sujal";

export {};
```

Now the file has its own scope.

### Rule

```txt
Has import/export? → Module
No import/export? → Script
```

---

# 2. `force` (Strict Behavior)

With `force`, TypeScript treats **every `.ts` and `.tsx` file as a Module**.

It does not matter if:

* there is no import
* there is no export
* package.json is missing

Every file gets its own scope automatically.

```ts
// user.ts

const username = "Sujal";
```

Even without imports or exports, this file is still a Module.

---

## When Should You Use It?

Modern projects such as:

* Next.js
* React
* Vite
* Angular
* Modern Node.js Applications

These projects already use modules everywhere.

Using `force` helps prevent accidental global variables.

### Rule

```txt
Every file = Module
```

---

# 3. `auto` (Smart Default)

Introduced in TypeScript 4.7.

This is the current default behavior.

Think of it as:

```txt
legacy + some extra smart checks
```

A file becomes a Module if ANY of the following are true:

### 1. Contains Import or Export

```ts
import { sum } from "./math";
```

or

```ts
export const name = "Sujal";
```

---

### 2. package.json Uses ES Modules

```json
{
  "type": "module"
}
```

If this exists, TypeScript automatically treats files as modules.

---

### 3. Uses `.mts` or `.cts`

```txt
app.mts
server.cts
```

These extensions explicitly indicate module behavior.

---

### 4. Uses Modern React JSX

```json
{
  "jsx": "react-jsx"
}
```

Since React's new JSX transform works with modules, TypeScript treats the file as a Module.

---

## Rule

```txt
Import/Export?
OR

"type": "module" ?
OR

.mts / .cts ?
OR

jsx: "react-jsx" ?

YES → Module
NO  → Script
```

---

# Quick Comparison Table

| Option   | Behavior                                         |
| -------- | ------------------------------------------------ |
| `legacy` | Only files with `import` or `export` are Modules |
| `auto`   | Uses smart checks to detect Modules              |
| `force`  | Every file is a Module                           |

---

# Easy Way to Remember

### `legacy`

```txt
"Show me an import/export first."
```

---

### `auto`

```txt
"I'll check import/export and some modern settings too."
```

---

### `force`

```txt
"I don't care. Every file is a Module."
```

---

# Which One Should You Use?

### Modern Projects (Recommended)

```json
{
  "moduleDetection": "force"
}
```

Examples:

* React
* Next.js
* Vite
* Modern Node.js

---

### Existing/Older Projects

```json
{
  "moduleDetection": "auto"
}
```

---

### Legacy Codebases

```json
{
  "moduleDetection": "legacy"
}
```

---

# Interview Answer

**Q: What is `moduleDetection` in TypeScript?**

`moduleDetection` controls how TypeScript decides whether a file should be treated as a Module or a Script.

* `legacy` → Only import/export makes a file a Module.
* `auto` → Uses import/export plus modern checks (`type: module`, `.mts`, `.cts`, React JSX).
* `force` → Every file is treated as a Module regardless of its contents.
