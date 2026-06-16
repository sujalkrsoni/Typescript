let a : "hello"= "hello" // a is of type string

a = "hello world!"; // Error: Type '"hello world!"' is not assignable to type '"hello"'.

a = "hello" // This is valid




type fruits = "apple" | "banana" | "orange"; // type is a union of string literals

let myFruits : fruits = "apple"; // This is valid
myFruits = "banana"; // This is valid
myFruits = "orange"; // This is valid


console.log(myFruits)


const greeting = "hello"; // these are collective types 
const bool = true;

console.log(greeting); // This is valid because greeting is of type string
console.log(bool); // This is valid because bool is of type boolean