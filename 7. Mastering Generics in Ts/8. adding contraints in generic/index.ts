type HasLength = {
    length : number;
}

type PersonalType < T extends HasLength> = T;

let a : PersonalType<string> = "Hello";
console.log(a.length); // Output: 5

let b : PersonalType<number[]> = [1, 2, 3];
console.log(b.length); // Output: 3

// The following line would cause a TypeScript error because number does not have a length property
// let c : PersonalType<number> = 42; //! Error: Type 'number' does not satisfy the constraint 'HasLength'.

//* because c is a number, and the type constraint `T extends HasLength` requires that `T` must have a `length` property. Since numbers do not have a `length` property, assigning a number to `c` violates the constraint, resulting in a TypeScript error.





// ------------------------------------------------------------------------------------------------------------------------------------------------------


type myType < T extends U, U> = T;  // here we're using u type in T
let x : myType<number, number> = 42;   // here we're saying the u is number and the t will alos be a number because of the constraint, so this is valid
let x : myType<"hello", string> = "Hello";   // 

// -------------------------------------------------------------------------------------------------------------------------------------------------------


function myFunc< T extends HasLength>(param1: T): T {
    return param1;
}

myFunc("Hello"); // Valid, string has a length property
myFunc([1, 2, 3]); // Valid, array has a length property
myFunc({ length: 10 }); // Valid, object has a length property
myFunc({ length: 10 , name: "John", age : 22 });  // valid, here we've length property and other properties as well,



function myFunc2< T extends U, U>(param1: T): T {
    return param1;
}

myFunc2<{length :number, name : string}, HasLength>({ length: 10, name: "John" }); // Valid, number does not have a length property, but it satisfies the constraint because U is HasLength
myFunc2<[], HasLength>([]); // Valid, array has a length property












