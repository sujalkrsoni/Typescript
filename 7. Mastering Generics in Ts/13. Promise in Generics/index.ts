// const value = new Promise((resolve, reject) => {  // here we're not defining the type then it will be undefined 
//   return resolve("Hello World");
// });

// console.log(value) // Promise { 'Hello World' } //? on Hover: const value: Promise<unknown>



// const value = new Promise<string>((resolve, reject) => {
//   return resolve("Hello World");
// });

// console.log(value) // Promise { 'Hello World' } //? on Hover: const value: Promise<string>


// *****************************************************************************************************************

const value = new Promise<string>((resolve, reject) => {
  return resolve("hello world !");
});

const result = await value;

console.log(result) // hello world !
//? on Hover: const result: string


