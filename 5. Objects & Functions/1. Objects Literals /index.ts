const user = { name: "John Doe", age: 30, email: "john.doe@example.com" };
const user2 = {};
console.log(user);
console.log(user2); // {} , and here we can't add any properties to user2 because it is an empty object and TypeScript infers its type as {}.

// ? this is type interference, TypeScript infers the type of the object based on its properties and their types. In this case, it infers the type of user as an object with properties name, age, and email of types string, number, and string respectively.
// const user: {
//     name: string;
//     age: number;
//     email: string;
// }


// * but in the case of Array it types array[] as any[] and we can add any type of value to it. For example:
const arr = [];
arr.push(1); // we can add number to the array
arr.push("hello"); // we can add string to the array
arr.push(true); // we can add boolean to the array

console.log(arr); // [1, "hello", true]




// ! this is type defined to an object , and its called object literal
const user3: { name: string; age: number; email: string } = {
  name: "sujal",
  age: 22,
  email: "sujal@example.com", 
};


//* in the case of tuple , we've to assign value immediately ! otherwise it will also give the error : Type [] is not assignable to "your tuple"
// let myTupleArr : [string, number ] = [] // ? here it gives error, when you hover on myTupleArr;
//? we'll have to assign value as well while creating array using tuple : let myTuppleArr : [string, number] = ["sujal" 22] 
// For better readable format : 
//  let myTuppleArr : [name :string, age : number] = ["sujal" 22]




type myUser = {
  name: string;
  age: number;
  email: string;
};

const user4 : myUser={ // if we've used the type then as const will not work , for make working as const we'll have ot remove it 
  name: "sujal",
  age: 22,
  email: "sujal@example.com",
} as const;  // it will not work , because we're using the myUser type , so make it as const will work we'll have to remove myUser type 
// to know the diff b/w myUser type and as const , hover on both then you'll understand ! 


// ? when we hover on const then we'll get this :
// type const = {
//     readonly name: "sujal";
//     readonly age: 22;
//     readonly email: "sujal@example.com";
// }

//* but this will not work, because we're defining the type 