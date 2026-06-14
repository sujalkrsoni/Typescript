let a = [1, 2, 3, 4, 5];

//? forEach method
a.forEach((num) => {  // forEach doesn't return anything, it just executes the provided function for each element in the array.
    console.log(num);
});

//? map method
let b = a.map((num) => num * 2);
console.log(b); // [2, 4, 6, 8, 10]


let c = a.map((el) => el.toString()); // c is an array of strings, where each number in the original array a is converted to a string using the toString() method.
console.log(c); // ["1", "2", "3", "4", "5"]


let boolArr = a.map((el) =>  el % 2 === 0); // boolArr is an array of booleans, where each number in the original array a is checked for evenness. If the number is even, it returns true; otherwise, it returns false.
console.log(boolArr); // [false, true, false, true, false]



let arr = [1, 2, "hello", 4, "world", 6]; // mixed array of numbers and strings
let d = arr.map((el) => typeof el === "number"); // d is an array of booleans, where each element in the original array a is checked for its type. If the element is of type number, it returns true; otherwise, it returns false. it also called type narrowing, which is a feature of TypeScript that allows you to narrow down the type of a variable based on certain conditions or checks.
console.log(d); // [true, true, false, true, false, true]



let sum = a.reduce ((acc, curr) => acc + curr, 0); // reduce method is used to accumulate the values of the array into a single value. In this case, it sums up all the numbers in the array a. The initial value of the accumulator (acc) is set to 0.
console.log(sum); // 15
console.log(typeof sum); // number


