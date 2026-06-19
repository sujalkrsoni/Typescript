interface person {
    name : string,
    age : number,
}

interface user {
    name : string,
}


const Person : person = {
    name : "sujal",
    age : 22
}

const User : user  =  Person; // this is structural typing


const user2 : user = {
    name : "sujal",
    // age : 22 //! here we can't add age , because user (literal type) doesn't have age property
}
// * in this case when we assign value then here two checks apply : minimum property check & access property check 



// * but if we do like this and try to assign then it will work because here access property check doesn't apply 

let obj = {
    name : "sujal",
    age : 22, 
}

const user3 : user = obj; 

console.log(user3) // { name: 'sujal', age: 22 } , when we try to get age property hover vs code suggestion then we'll not get that ! because access property check doesn't apply here


// ? same stuff also apply on functions 

function myFunc(name : user) {
    console.log(name);
}

myFunc({name : "sujal"}) // sujal
// myFunc({name :"sujal", age : 22}) // error , age can't be passed because myFunc doesn't have age parameter

const test = {name : "sujal", age : 22, email : "sujal@gmail.com"}
myFunc(test) // but here it will work because access property check doesn't apply here


// let obj2 : {} = undefined ?? why it gives error ?