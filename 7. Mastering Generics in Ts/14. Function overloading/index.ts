// function myFunc (a : string) {
//     return a.toUpperCase();
// }

// function myFunc (a : number) {
//     return a.toFixed(2);
// }

// console.log(myFunc("Hello"))
// // console.log(myFunc(123.456)) // Error: Duplicate function implementation.





function myFunc (val : string) : string;
function myFunc (val : number) : number;

// const a = 10 ; //! if we've defined any value b/w the function then it will be treated as a function not a funcation overloading 
// ? we can addd the commend but not any signle line of code


function myFunc(val : string | number) : string | number {
    if (typeof val === "string") {
        return val.toUpperCase();
    } else {
        return val.toFixed(2);
    }
    return "Wrong input"
}

console.log(myFunc("Hello"))  //  Hello
console.log(myFunc(23)) // 23.00


// ? if we wanna do same operations then do generics
// ? if we wanna do different operations then do function overloading
