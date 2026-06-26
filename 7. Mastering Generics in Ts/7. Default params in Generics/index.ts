type DynamicType<T = number, U = string> = T;

let a: DynamicType<string, number> = "hello"; // U defaults to string

let b: DynamicType = 42; // T defaults to number



// function myFunc<T = number>(val: T) {
//   return val * 5;   //! The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.
// }

// const result = myFunc(10);


// function myFunc<T extends number>(val: T) {
//   return val * 5;
// }

// const result = myFunc(10);



