// * In Typescript, A type is a set of values that a variable can hold.
// * A type can be a primitive type, such as number, string, boolean, etc.
// * A type can also be a union type, which is a set of types that a variable can hold.
// * A type can also be an intersection type, which is a set of types that a variable must hold.
// * A type can also be a mapped type, which is a set of types that a variable can hold, but with some modifications.
// * A type can also be a conditional type, which is a set of types that a variable can hold, based on some condition.


const num : number = 23;            // set of number type (infinite set of values that a variable can hold)
const str : string = "hello ";      // set of string type (infinite set of values that a variable can hold)
const bool : boolean = false        // set of boolean type (finite set of values that a variable can hold either true or false)
const un : undefined = undefined    // set of undefined type (singleton set, that a variable can hold only undefined. )
const nu : null = null              // set of null type (singleton set, that a variable can hold only null. )
const obj : object = {}             // set of object type (infinite set of values that a variable can hold) like {}, [], {},new Date(), functions etc.
const vd : void = undefined         // set of void type (singleton set, that a variable can hold only undefined. or we can assign void but behind the scene void is also a undefined )
const universal : unknown = "can be anything"     // can be anything like number, string, boolean, undefined, null, object, array, function etc.

let emptySet : never;           // never type is a type that represents the absence of a value. It is used to indicate that a variable will never have a value.


const anyType : any = "can be anything"     // any type is a type that represents all types. It is used to indicate that a variable can hold any type of value.

//* any type can be store into another any type , but unknow can't use store inside any other type 

let myType : string = anyType; // can be store into another any type
// let myType2 : string = universal; //! can't store into another type, unknow can't be assign to string 


// in real only unknown type is a top type, not any is also a top type, but generally we say any is top type , but in real it doesn't 


