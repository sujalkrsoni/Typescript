// let a : string | number = "hello"

// type T = typeof a;

// console.log(typeof a)



let obj = {
    name : "hello", 
    email : "sujalsoni@gmail.com",
    age : 23
}

type T = typeof obj;  // here we're getting the typeof obj, and assigning to T

const user : T = {
    name : "hello", 
    email : "sujalsoni@gmail.com",
    age : 23
} 


// --------------------------------------------------------------------------------------------------------------------------------------------------------


function myFunc(name : string){
    return `Hello, ${name}`
}

const newFunc : typeof myFunc = (){
    return 39;                  //! Type 'number' is not assignable to type 'string'.                
    // return "Hello, world"
}


interface A {
    value : typeof newFunc
}
