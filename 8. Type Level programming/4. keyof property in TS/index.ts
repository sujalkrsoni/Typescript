type user = {
    name : string;
    age : number;
}

const user : user ={
    name : "sujal",
    age : 22
}

type T1 = typeof user;  //? on hover :  type T1 = { name: string; age: number; }

type T2 = keyof '';  //? on hover :  type T2 = number | typeof Symbol.iterator | "toString" | "charAt" | "charCodeAt" | "concat" | "indexOf" | "lastIndexOf" | "localeCompare" | "match" | "replace" | "search" | "slice" | "split" | "substring" | "toLowerCase" | "toLocaleLowerCase" | "toUpperCase" | "toLocaleUpperCase" | "trim" | "length" | "substr" | "valueOf" | "codePointAt" | "includes" | "endsWith" | "normalize" | "repeat" | "startsWith" | "anchor" | "big" | "blink" | "bold" | "fixed" | "fontcolor" | "fontsize" | "italics" | "link" | "small" | "strike" | "sub" | "sup" | "padStart" | ... 9 more ... | "toWellFormed"\

console.log("hello"["to"])
console.log("hello"["charAt"](3))
console.log("hello"["toLocaleUpperCase"]()) 
console.log("hello"["length"])
console.log("hello"["toString"]())


type T3 = keyof 67;  // type T3 = "toString" | "toFixed" | "toExponential" | "toPrecision" | "valueOf" | "toLocaleString"

console.log(2378.7664["toFixed"](2))
console.log(2378.7664["toString"]())



type T4 = keyof false;  // type T4 = "toString" | "valueOf" | "toLocaleString"

console.log(false["toString"]())
console.log(false["valueOf"]()) 
console.log(false["toLocaleString"]())


type T5 = keyof undefined  // ? T5 = never

type T6 = keyof null  // ? T6 = never

type T7 = keyof void // ? T7 = never

type T8 = keyof unknown // ? T8 = never

type T9 = keyof any // ? type T9 = string | number | symbol

type T10 = keyof object // ? type T10 = never

type T11 = keyof never;  // ? type T11 = string | number | symbol


type a = {
    name : string,
    age : 22
}

const myName : a ={
    name : "sujal",
    age : 22
}

type T12 = keyof a


type Car = {
    brand: string;
    model: string;
    year: number;
}

type CarKeys = keyof Car;







// The difference between the keyof and typeof : 

// in Javascript we've  only typeof operator, but in TS we've both operator

// typeof operator returns the type of a variable | value. whereas keyof operator return a union properties of a type. 
// for example :

// type user = {name : string , age : number}
// let obj = {name : "sujal", age : 22} 

// Here, we've a type of user and object obj
// console.log(typeof a) // object 

// now we can find the properties of user (because user is a type not a variable which has a value )

// console.log(keyof user) // {name : string, age : number}
// console.log(keyof obj) // we can't do it , because keyof can apply on a type, not in a value 

// suppose we wanna find the all properties of any types like a number , string, null , undefined, boolean, object, function then we can get using the keyof operators 

// console.log("hello"[" "]) // now when you press ctrl + space then your vs code suggest all properties of a string, because here we're trying to get the all properties/methods like split, toUpperCase, charAt etc .. 

// if you're wondering that how we're accessing properties or methods of string like objects.
//    console.log(obj["name"])   // sujal 

// then i think you're not aware for autoboxing. 

// let me quickly make you understand about autoboxing, its nothing but justing creating temporary object(wrapper) into each type so that we can access their properties,  like in the case of string it creates string _proto_ (as a wrapper) and it has all these methods or it gets more from their parent proto type. 

// after that this wrapper deletes. 

