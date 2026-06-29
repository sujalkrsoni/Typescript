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

console.log("hello"[1])
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

