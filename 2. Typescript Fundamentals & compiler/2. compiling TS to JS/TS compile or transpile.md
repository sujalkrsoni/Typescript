# What is TypeScript Really?

Many developers say:

> "TypeScript is a transpiler."

This is only partially correct.

The most accurate statement is:

> **TypeScript is a compiler that performs transpilation as one of its final steps.**

The TypeScript Compiler (`tsc`) does much more than converting TypeScript into JavaScript.

---

# TypeScript Compilation Pipeline

```text
                TypeScript Source Code
                           │
                           ▼
                  1. Lexical Analysis
                           │
                           ▼
                       Tokens
                           │
                           ▼
                      2. Parsing
                           │
                           ▼
                  Abstract Syntax Tree
                          (AST)
                           │
                           ▼
                    3. Type Checking
                           │
                           ▼
                 4. Semantic Validation
                           │
                           ▼
                 5. Module Resolution
                           │
                           ▼
                  6. Error Reporting
                           │
                           ▼
                    7. Transpilation
                           │
                           ▼
                    JavaScript Output
                           │
              ┌────────────┴────────────┐
              ▼                         ▼
       Source Maps (.map)       Declaration Files (.d.ts)
```

---

# 1. Lexical Analysis (Scanner)

## Purpose

Break source code into small pieces called **tokens**.

Example:

```ts
const age: number = 25;
```

Tokens:

```text
const
age
:
number
=
25
;
```

Think of this like:

```text
Sentence
↓
Words
```

The scanner reads characters and creates tokens.

Output:

```text
Characters → Tokens
```

---

# 2. Parsing

## Purpose

Convert tokens into an AST (Abstract Syntax Tree).

Code:

```ts
const age: number = 25;
```

AST:

```text
VariableDeclaration
├── Name: age
├── Type: number
└── Value: 25
```

Think of AST as:

```text
Code Structure Diagram
```

The compiler now understands:

* What is a variable
* What is a function
* What is a class
* What belongs to what

Output:

```text
Tokens → AST
```

---

# 3. Type Checking

## Purpose

Verify type safety.

Example:

```ts
let age: number = "25";
```

Error:

```text
Type 'string' is not assignable to type 'number'
```

The Type Checker ensures:

* number is assigned to number
* string is assigned to string
* function parameters match
* return types are correct

Output:

```text
Type-safe code
```

---

# 4. Semantic Validation

## Purpose

Check whether the code makes logical sense according to TypeScript rules.

Example:

```ts
class User {
    private name = "Sujal";
}

const user = new User();

console.log(user.name);
```

Error:

```text
Property 'name' is private
```

Another example:

```ts
class Animal {}

class Dog extends Animal {}

class Car extends Dog {}
```

TypeScript validates inheritance rules.

Semantic Validation checks:

* private/protected access
* class relationships
* interface implementation
* inheritance correctness
* language rules

Output:

```text
Semantically valid program
```

---

# 5. Module Resolution

## Purpose

Find imported files.

Example:

```ts
import User from "./User";
```

TypeScript must locate:

```text
./User.ts
./User.tsx
./User.d.ts
./User/index.ts
```

Depending on configuration.

Module Resolution answers:

```text
Where is this imported thing located?
```

Without this step imports wouldn't work.

Output:

```text
Resolved dependency graph
```

---

# 6. Error Reporting

## Purpose

Generate meaningful errors for developers.

Example:

```ts
let age: number = "hello";
```

Compiler reports:

```text
Type 'string' is not assignable to type 'number'
```

Error Reporting uses information collected from:

* Parser
* Type Checker
* Semantic Analyzer
* Module Resolver

Output:

```text
Developer-friendly diagnostics
```

---

# 7. Transpilation (Emission)

## Purpose

Convert TypeScript into JavaScript.

Example:

TypeScript:

```ts
let age: number = 25;
```

JavaScript:

```js
let age = 25;
```

Another example:

TypeScript:

```ts
class User {}
```

Target ES5:

```js
function User() {}
```

This stage is called:

```text
Transpilation
```

Because:

```text
TypeScript → JavaScript
```

High-Level Language → High-Level Language

---

# Additional Outputs

## Source Maps

Generated:

```text
app.js.map
```

Used by:

```text
Chrome DevTools
VS Code Debugger
```

Allows debugging TypeScript while running JavaScript.

---

## Declaration Files

Generated:

```text
index.d.ts
```

Example:

```ts
declare function greet(name: string): void;
```

Used by:

* npm packages
* IDE autocomplete
* type sharing

---

# Interview Answer

What is TypeScript?

> TypeScript is a statically typed superset of JavaScript. Its compiler (`tsc`) first reads your code and breaks it into tokens (lexical analysis), then builds an Abstract Syntax Tree (AST) through parsing. After that, it checks types, validates language rules, resolves imports and modules, and reports any errors it finds. Finally, it converts (transpiles) TypeScript into JavaScript. It can also generate declaration files (`.d.ts`) for type information and source maps (`.map`) for easier debugging.

---

# Quick Revision

```text
TypeScript Compiler (tsc)

1. Lexical Analysis
   Characters → Tokens

2. Parsing
   Tokens → AST

3. Type Checking
   Verify Types

4. Semantic Validation
   Verify Language Rules

5. Module Resolution
   Resolve Imports

6. Error Reporting
   Generate Diagnostics

7. Transpilation
   TypeScript → JavaScript

8. Extra Outputs
   .d.ts Files
   Source Maps
```

# One-Line Summary

TypeScript is not just a transpiler; it is a full compiler whose final stage happens to transpile TypeScript into JavaScript.
