# JavaScript Execution & V8 Engine Notes

## 1. How JavaScript Runs

When we write JavaScript code, the CPU cannot understand it directly.

Example:

```js
let a = 10;
let b = 20;
console.log(a + b);
```

The JavaScript engine converts this code into a form that the computer can understand and execute.

### Execution Flow

```
JavaScript Code
       ↓
     Parser
       ↓
      AST
(Abstract Syntax Tree)
       ↓
 Bytecode Generation
       ↓
   Interpreter
       ↓
 JIT Compiler (Hot Code)
       ↓
  Machine Code
       ↓
      CPU
```

---

## 2. What is V8?

V8 is Google's JavaScript Engine.

Used in:

* Google Chrome
* Node.js

### Responsibilities of V8

1. Parse JavaScript code.
2. Create AST (Abstract Syntax Tree).
3. Generate Bytecode.
4. Execute code using an Interpreter.
5. Optimize frequently executed code using JIT Compilation.
6. Manage memory using Garbage Collection.

---

## 3. What is Parsing?

Parsing means reading and understanding JavaScript code.

Example:

```js
let age = 21;
```

The parser checks:

* Syntax correctness
* Variable declarations
* Structure of code

After parsing, V8 creates an AST.

---

## 4. What is AST (Abstract Syntax Tree)?

AST is a tree-like representation of JavaScript code.

Example:

```js
let x = 5 + 3;
```

Simplified AST:

```
VariableDeclaration
        |
        x
        |
      (+)
     /   \
    5     3
```

The engine uses this structure to understand the code.

---

## 5. What is Bytecode?

Bytecode is an intermediate code between JavaScript source code and machine code.

Example:

```js
let x = 10;
```

Source Code
↓

Bytecode
↓

Machine Code

Bytecode executes faster than reading raw JavaScript repeatedly.

---

## 6. What is an Interpreter?

An Interpreter executes code line by line.

Example:

```js
console.log("Hello");
console.log("World");
```

The interpreter reads one instruction and executes it immediately.

### Advantages

* Fast startup
* No separate compilation step

### Disadvantages

* Slower for repeated execution

---

## 7. What is a Compiler?

A compiler converts the entire code into machine code before execution.

### Advantages

* Faster execution

### Disadvantages

* Compilation takes time

Examples:

* C
* C++
* Go

---

## 8. What is JIT Compilation?

JIT = Just In Time Compilation

Modern JavaScript engines use JIT compilation.

### Process

1. Interpreter starts executing code.
2. V8 tracks frequently executed code.
3. Frequently executed code is called Hot Code.
4. Hot Code is compiled into optimized machine code.
5. Future executions become much faster.

Example:

```js
for(let i = 0; i < 1000000; i++) {
   total += i;
}
```

Since the loop runs many times, V8 compiles it into optimized machine code.

---

## 9. Is JavaScript Interpreted or Compiled?

### Old Answer

JavaScript is an Interpreted Language.

### Modern Answer

JavaScript is both Interpreted and Compiled.

Modern JavaScript engines:

* Interpret bytecode initially.
* Use JIT Compilation for optimization.

Therefore:

"JavaScript is a JIT-Compiled Language that uses both interpretation and compilation."

---

## 10. JavaScript Execution in V8

```
JavaScript Code
        ↓
      Parser
        ↓
       AST
        ↓
 Ignition Interpreter
        ↓
     Bytecode
        ↓
 Execute Bytecode
        ↓
 Frequently Used Code?
        ↓
       Yes
        ↓
 TurboFan Compiler
        ↓
 Optimized Machine Code
        ↓
        CPU
```

---

## Interview Answer

### Q. How does JavaScript run?

JavaScript code is parsed by the V8 engine, converted into an AST, transformed into bytecode, executed by the Ignition interpreter, and frequently executed code is optimized by the TurboFan JIT compiler into machine code for faster performance.

### Q. What is V8?

V8 is Google's JavaScript engine used in Chrome and Node.js. It parses JavaScript, generates bytecode, performs JIT compilation, executes code, and manages memory through garbage collection.

### Q. Is JavaScript interpreted or compiled?

Modern JavaScript is both interpreted and compiled. It is initially interpreted and then hot code is JIT-compiled into machine code for better performance.



## 🚀 Quick Revision

- **V8** = JavaScript Engine used by **Chrome** and **Node.js**
- **Execution Flow:**
  ```text
  Parser → AST → Bytecode → Interpreter → JIT Compiler → Machine Code
  ```
- **Ignition** = V8's Interpreter
- **TurboFan** = V8's Optimizing Compiler
- **Hot Code** = Frequently executed code
- JavaScript is **both Interpreted and JIT Compiled**
- Modern JavaScript uses a **Hybrid Execution Model**
  - Interpreter (for fast startup)
  - JIT Compiler (for performance optimization)

### 🎯 Interview Answer

> JavaScript is neither purely interpreted nor purely compiled. Modern JavaScript engines like V8 first interpret the code and then use Just-In-Time (JIT) compilation to convert frequently executed code into optimized machine code. Therefore, JavaScript uses a hybrid execution model that combines both interpretation and compilation.