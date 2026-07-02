console.log([].every((el) => el > 100))  // true , because the array is empty, so the condition is vacuously true for all elements (since there are no elements to check, so we can't prove it , that in programming if we can't prove wrong that means correct).


type T1 = keyof never; // ? type T = string | number | symbol
type T2 = keyof any; // ? type T = string | number | symbol

type T3 = keyof { a: number; b: string; c: boolean }; // ? type T = "a" | "b" | "c"

type T4 = keyof undefined // ? type T = never

type a= {
    name : string; 
    age : number;
}
type b = {
    name : string;
    email : string;
}

type T5 = keyof a | keyof b // ? type T = "name" | "age" | "email"
type T6 = keyof (a & b ) // ? type T = "name" | "age" | "email"


type T7 = keyof (a | b) // ? type T7 = "name"
type T8 = keyof a &  keyof b // ? type T8 = "name"


export {}