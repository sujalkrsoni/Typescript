let arr : string[] = [ "Hello", "World", "!" ]; //! explicitly typed string array

arr.push("This is a string array");
// arr.push(123); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
console.log(arr);



//? Array of any type
let arr2 = []; // it means arr2 is of type any[] (array of any type)
arr2[0] = 5;
arr2[1] = "Hello";
arr2[2] = true; 
arr2[3] = { name: "John", age: 30 }; // it can be any type of object



//? Array of numbers

let arr3 = [1,2,3]; // it means arr3 is of type number[] (array of numbers)
arr3.push(4);
arr3.push(Infinity);
arr3.push(NaN);
arr3.push(-Infinity);  // All of these are valid numbers in JavaScript, so they can be pushed into a number array.  

// arr3.push("Hello"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.



let arr4 : Array<string> = ["Hello", "World"]; //? Another way to declare an array of strings using generic array type syntax
arr4.push("This is another string array");
// arr4.push(123); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
console.log(arr4);


let arr5 : ( string | number )[] = ["Hello", 123, "World", 456]; //? Array of strings or numbers
arr5.push("This is a string or number array");
arr5.push(789);
// arr5.push(true); // Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
console.log(arr5);


arr5[0]?.toLocaleString(); //? Optional chaining to safely access the method on the first element of arr5, which can be either a string or a number. If the first element is undefined, it will return undefined instead of throwing an error.

