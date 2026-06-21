type T1 = number[]
type T2 = string[]

type T3 = T1 | T2
type T4 = T1 & T2

const arr1 : T3 = ["hello", 22]


let a : never ;
let b! : never   // here can also use or while using there we do 
// const arr2 : T4 = ["hello", 22] //? error not able to assign, string or number is not assignable to never array 
const arr2 : T4 = [a! , b ] // a! non null assertion , we're saying there will be a value , without ! it will give error 


//* (string | number)[] - heterogenous Array  { here can both string and number can be present in array }
//* string[] | number[] - homogenous Array {here either can be string array or number array }


// -----------------------------------------------------------------------------------------------------------------------


type T5 = number[] & {test : string}

// const arr5 : T5 = [1,2,3,4,5,6,7,8,9,10] // give error test is not present in array

// ? we can do like this :
const arr5 = [1,2,3] as T5

arr5.test = "hello" // and add test property to array like this 

console.log(arr5) // [1,2,3, test: "hello"] , are you looking something here we've key value pair into the array 



