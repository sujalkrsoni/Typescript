let userObj = ["sujal", 25, true]

// * Here, TS alreadys knows that userObj is a tuple of type [string, number, boolean] based on the values assigned to it. So we can directly access the elements of the tuple without any type assertions.
// (userObj[0] as string).toUpperCase(); //? Type assertion to treat the first element of the tuple as a string and call the toUpperCase() method on it.

// (userObj[1] as number).toFixed(2); //? Type assertion to treat the second element of the tuple as a number and call the toFixed() method on it.


const myArray = [1, 2, 3] as const; //? Type assertion to treat the array as a tuple of literal types [1, 2, 3]

myArray[0] //? This will be of type 1, not number, because of the const assertion. So you can only access the value 1 at index 0, and not any other number.
myArray[1] = 5; //? Error: Cannot assign to '1' because it is a read-only property. This is because of the const assertion, which makes the array immutable and its elements read-only.

// * Type assertions are used to tell the TypeScript compiler that we know more about the type of a value than it does. It is a way to tell the compiler to treat a value as a different type than what it thinks it is.


const myObj = { name: "sujal",
 age: 25,
 isStudent: true,
 myObj2: { name: "sujal", age: 25, isStudent: true }
} as const; //? Type assertion to treat the object as a read-only object with literal types for its properties

// * listen if we declare a non-primitive variable (like an object or array). then we can't add more properties to it, but we can change the values of existing properties. But if we use const assertion, then we can't change the values of existing properties as well, because it makes the object immutable and its properties read-only.


//? If we hover over myObj, we'll see that it is of type: when we do type assertion with const 
// const myObj: {
//     readonly name: "sujal";
//     readonly age: 25;
//     readonly isStudent: true;
//    readonly myObj2: { readonly name: "sujal"; readonly age: 25; readonly isStudent: true; }; // also nested object is also treated as read-only with const assertion
// }


//? without const assertion, it would be of type:
// const myObj: {
//     name: string;
//     age: number;
//     isStudent: boolean;
// }



