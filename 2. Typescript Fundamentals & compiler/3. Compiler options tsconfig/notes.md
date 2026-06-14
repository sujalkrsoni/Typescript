# TypeScript `tsconfig.json` Notes

## What is `tsconfig.json`?

`tsconfig.json` is the configuration file for the TypeScript Compiler (TSC).

It tells TypeScript:

* Which files to compile
* Which JavaScript version to generate
* Where to place output files
* How strict type checking should be
* Various compilation rules

### Example

```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "es6",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "removeComments": true,
    "noEmitOnError": true
  }
}
```

---

# tsconfig.json vs jsconfig.json

| Feature                    | tsconfig.json              | jsconfig.json       |
| -------------------------- | -------------------------- | ------------------- |
| Used For                   | TypeScript Projects        | JavaScript Projects |
| Compiles Code              | ✅ Yes                      | ❌ No                |
| Controls TSC Compiler      | ✅ Yes                      | ❌ No                |
| Type Checking              | ✅ Full TypeScript Checking | ⚠️ Limited          |
| IntelliSense Support       | ✅ Yes                      | ✅ Yes               |
| Generates JavaScript Files | ✅ Yes                      | ❌ No                |

## Simple Explanation

### tsconfig.json

Used in TypeScript projects.

Controls how the TypeScript compiler (`tsc`) works.

```bash
.ts → tsc → .js
```

### jsconfig.json

Used in JavaScript projects.

Helps VS Code provide:

* Auto Completion
* IntelliSense
* Navigation
* Path Suggestions

But it does **not compile JavaScript**.

---

# How TypeScript Compiler Works

When you run:

```bash
tsc
```

TypeScript does much more than transpiling.

```text
TypeScript File (.ts)
          │
          ▼
 ┌─────────────────┐
 │ Lexical Analysis│
 └─────────────────┘
          │
          ▼
 ┌─────────────────┐
 │     Parsing     │
 └─────────────────┘
          │
          ▼
 ┌─────────────────┐
 │      AST        │
 │ (Syntax Tree)   │
 └─────────────────┘
          │
          ▼
 ┌─────────────────┐
 │ Type Checking   │
 └─────────────────┘
          │
          ▼
 ┌─────────────────┐
 │Semantic Analysis│
 └─────────────────┘
          │
          ▼
 ┌─────────────────┐
 │Module Resolution│
 └─────────────────┘
          │
          ▼
 ┌─────────────────┐
 │Error Reporting  │
 └─────────────────┘
          │
          ▼
 ┌─────────────────┐
 │  Transpilation  │
 └─────────────────┘
          │
          ▼
 JavaScript Output
```

---

# compilerOptions

All TypeScript compiler settings are placed inside:

```json
{
  "compilerOptions": {}
}
```

---

# 1. target

Specifies which JavaScript version TypeScript should generate.

```json
{
  "target": "es6"
}
```

### Example

TypeScript:

```ts
const nums = [1, 2, 3];

const doubled = nums.map(n => n * 2);
```

### target = ES6

```js
const nums = [1, 2, 3];

const doubled = nums.map(n => n * 2);
```

### target = ES5

```js
var nums = [1, 2, 3];

var doubled = nums.map(function (n) {
  return n * 2;
});
```

### Common Targets

| Target       | Description            |
| ------------ | ---------------------- |
| ES5          | Older browsers support |
| ES6 (ES2015) | Modern JavaScript      |
| ES2017       | Async/Await support    |
| ES2020       | Modern features        |
| ESNext       | Latest JavaScript      |

### Remember

**target decides which JavaScript version TypeScript generates.**

---

# 2. module

Specifies which module system should be generated.

```json
{
  "module": "es6"
}
```

### TypeScript

```ts
import { add } from "./math";
```

### module = es6

```js
import { add } from "./math";
```

### module = commonjs

```js
const math = require("./math");
```

### Common Values

| Module       | Used In         |
| ------------ | --------------- |
| commonjs     | Node.js         |
| es6 / esnext | Modern Browsers |
| nodenext     | Latest Node.js  |
| amd          | Older Systems   |

### Remember

**module controls import/export generation.**

---

# 3. outDir

Specifies where compiled JavaScript files should be placed.

```json
{
  "outDir": "./dist"
}
```

### Folder Structure

Before:

```text
project
│
├── src
│   └── app.ts
```

After Compilation:

```text
project
│
├── src
│   └── app.ts
│
├── dist
│   └── app.js
```

### Remember

**outDir = Output Folder**

---

# 4. rootDir

Specifies where source TypeScript files are located.

```json
{
  "rootDir": "./src"
}
```

### Example

```text
project
│
├── src
│   ├── app.ts
│   └── utils
│       └── helper.ts
```

### Remember

**rootDir = Source Folder**

---

# rootDir + outDir Together

```json
{
  "rootDir": "./src",
  "outDir": "./dist"
}
```

### Source

```text
src
│
├── app.ts
└── utils
    └── helper.ts
```

### Output

```text
dist
│
├── app.js
└── utils
    └── helper.js
```

Folder structure remains the same.

---

# 5. strict

Enables all strict type-checking rules.

```json
{
  "strict": true
}
```

### Example

```ts
let name: string = 10;
```

Error:

```text
Type 'number' is not assignable to type 'string'
```

### Benefits

* Fewer runtime bugs
* Better type safety
* Better IntelliSense
* Cleaner code

### Remember

**Always keep `strict: true` in professional projects.**

---

# 6. esModuleInterop

Improves compatibility between CommonJS and ES Modules.

```json
{
  "esModuleInterop": true
}
```

### Without

```ts
import * as express from "express";
```

### With

```ts
import express from "express";
```

### Remember

**Allows default imports from CommonJS packages.**

---

# 7. removeComments

Removes comments from generated JavaScript.

```json
{
  "removeComments": true
}
```

### TypeScript

```ts
// User Service

const name = "Sujal";
```

### Output

```js
const name = "Sujal";
```

### Benefits

* Smaller bundle size
* Cleaner production code

### Remember

**removeComments = Remove all comments from output JS.**

---

# 8. noEmitOnError

Prevents JavaScript generation when TypeScript errors exist.

```json
{
  "noEmitOnError": true
}
```

### TypeScript

```ts
let age: string = 25;
```

Error:

```text
Type 'number' is not assignable to type 'string'
```

### Result

```text
❌ No JavaScript file generated
```

### If false

```text
⚠️ Error shown
✅ JS file still generated
```

### Remember

**noEmitOnError = No JS output if compilation fails.**

---

# 9. pretty

Makes compiler messages easier to read.

```json
{
  "pretty": true
}
```

### Benefits

* Colored errors
* Better formatting
* Easier debugging

### Remember

**Only affects terminal output, not generated code.**

---

# Interview Revision (30 Seconds)

| Property        | Purpose                          |
| --------------- | -------------------------------- |
| target          | JS version to generate           |
| module          | Module system (ESM/CommonJS)     |
| rootDir         | Source folder                    |
| outDir          | Output folder                    |
| strict          | Enable strict type checking      |
| esModuleInterop | Better CommonJS compatibility    |
| removeComments  | Remove comments from output      |
| noEmitOnError   | Stop JS generation on errors     |
| pretty          | Better compiler error formatting |

---

# Quick Revision

* `tsconfig.json` configures the TypeScript compiler.
* `jsconfig.json` configures JavaScript projects for VS Code.
* `target` → JavaScript version to generate.
* `module` → Module system (ESM/CommonJS).
* `rootDir` → Source code folder.
* `outDir` → Compiled output folder.
* `strict` → Enables strict type checking.
* `esModuleInterop` → Better CommonJS support.
* `removeComments` → Removes comments from output.
* `noEmitOnError` → Stops JS generation if errors exist.
* `pretty` → Makes terminal errors easier to read.

---

# One-Line Summary

**`tsconfig.json` is the brain of the TypeScript compiler, controlling how TypeScript analyzes, type-checks, and converts `.ts` files into JavaScript.**
