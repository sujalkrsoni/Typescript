const a = [1, "hello world!"];

const b : [string, number] = ['T-shit', 500];


// a[1]?.toUpperCase(); //* Error: Property 'toUpperCase' does not exist on type 'string | number'.

b[0].toLowerCase(); 


//* if the value looks like this that means its array 
//? string[] or (string | number)[] 


//* if the value looks like this that means its tuple
//? [string, number]



// * Tuples are fixed length array
// * Tuples are used to store multiple values of different types

const c : [ name : string, age : number] = ["sujal kumar soni", 22];
c[0] // "sujal kumar soni"
c[1] // 22

// c[2] = 10;  //! Tuple type '[name: string, age: number]' of length '2' has no element at index 2

const [x, y] = c;
x // "sujal kumar soni" //* string
y // 22 // * number



c.pop();
c[1].toFixed(); //* here its wrong because we've already popped the value so it will be undefined and undefined has no method toFixed 
// * because, if we try to remove or add elements to a tuple, we can't , it gives error but using array methods we can do that but it will break on the run time !
// * so, we should avoid using array methods on tuples because it can lead to unexpected behavior and runtime errors. Tuples are meant to be used as fixed-length arrays with specific types for each element, and using array methods can violate that contract. If you need to manipulate the data in a tuple, it's better to create a new tuple with the desired values rather than modifying the existing one.

c.push(4)
c.push("hello world")
c.push(6)
