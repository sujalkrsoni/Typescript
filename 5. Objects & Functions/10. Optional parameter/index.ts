function printName (name? : string) {
    // return `hello ${name === undefined ? "" : name}`
     return `hello ${name || ''}`
}

console.log(printName("sujal")) // hello John
console.log(printName()) // hello 



// ? another way to make optional parameter using default param

function printName2( name : string = ""){
    return `hello ${name || ""}`
}

console.log(printName2("sujal")) // hello John
console.log(printName2()) // hello


// * in function we're can't make first argument optional and second argument required
// * but we can make second argument optional and first argument required

function test(name : string, age? : number){
    return `hello ${name} ${age}`
}

console.log(test("sujal", 20)) // hello sujal 20

// ? if we want make first argument optional and rest required then we can't do it in JS/TS , but there is technique / trick we can do liek that !
// * using the object 

type myUser = {
    name? : string,
    age : number
}

function test2(user : myUser){
    return `hello ${user.name} ${user.age}`
}

console.log(test2({ age : 33})) // age is required, but name is optional 






// ? usig more advance syntax :

type myUser2  = ( user : myUser) => void;

const test3 : myUser2 = ({ name , age }) => {
    return `hello ${name} ${age}`
}

console.log(test3({ name : "sujal" , age : 33})) // age is required, but name is optional