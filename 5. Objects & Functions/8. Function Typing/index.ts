function add(a: number, b: number): boolean {
  return a > b;
}

const result = add(10, 5);


function printUpperCase(str : string) : void {
     console.log(str.toUpperCase())
     return ;
}


printUpperCase("hello world");

console.log(typeof null) // object 
console.log(typeof undefined) // undefined 



// never is used when we are sure that function will never return anything
function throwError () : never {
    throw new Error("Error Occured")
}

// const myError = throwError();

// console.log(myError); // here myError will never exist because we are throwing an error, before running it server will throw error or crash ! 

// ? another example for never

function infiniteLoop() : never {
    while(true) {
        console.log("Hello World")
    }
}

// const myLoop = infiniteLoop();
// console.log(myLoop); // here myLoop will never exist because we are in infinite loop, before running it server will crash !



function subtract(a: number, b: number): number { return a - b }
function multiply(a: number, b: number): number { return a * b }
function divide(a: number, b: number): number { return a / b }


// type for a function 

type MathFunction = (a: number, b: number) => number;

const math: MathFunction = function (a, b) { return a + b };

console.log(math(10, 5));

