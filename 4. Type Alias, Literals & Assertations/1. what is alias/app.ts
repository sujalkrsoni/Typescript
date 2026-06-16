type str = string; 

let a : str = "hello world!";
// let b : str = 23;  // * Error: Type 'number' is not assignable to type 'string'.


// * my custom type alias
type myType = string | number | boolean;

let c : myType = "hello world!";
let d : myType = 23;
let e : myType = true;

let f : myType[] = ["hello world!", 23, true, "typescript", 3.14, false];


// * Type aliases and another variable with the same name

type user = string | number;


let user : user = "sujal kumar soni";
let user2 : user = 1234567890;

