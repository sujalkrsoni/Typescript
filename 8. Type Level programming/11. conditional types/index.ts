type T1 = "hello" extends string ? "Yes" : "No"; //? Yes 

type T2 = "hello" extends number ? "Yes" : "No"; //? No

type T3 = "hello" extends string | number ? "Yes" : "No"; //? Yes

type T4 = "hello" extends string & number ? "Yes" : "No"; //? No

type T5 = {} extends object ? "Yes" : "No"; //? Yes

type T6 = object extends {} ? "Yes" : "No"; //? Yes

type T7 = never extends string ? "Yes" : "No"; //? Yes

type T8 = string extends never ? "Yes" : "No"; //? No

type T9 = unknown extends string ? "Yes" : "No"; //? No

type T10 = string extends unknown ? "Yes" : "No"; //? Yes

type T11 = any extends string ? "Yes" : "No"; //? Yes

type T12 = string extends any ? "Yes" : "No"; //? Yes, because any type is assignable to any other type, so the condition is true.

// type T13 {} extends {} ? "Yes" : "No"; //? Yes

type T14 = {} extends { a: number } ? "Yes" : "No"; //? No

type T15 = { a: number } extends {} ? "Yes" : "No"; //? Yes

type T16 = { a: number } extends { a: number; b: string } ? "Yes" : "No"; //? No

type T17 = { a: number; b: string } extends { a: number } ? "Yes" : "No"; //? Yes

type T18 = { a: number; b: string } extends { a: number; b: string } ? "Yes" : "No"; //? Yes

type T19 = { a: number; b: string } extends { a: number; b: string; c: boolean } ? "Yes" : "No"; //? No, because the left side type doesn't have the property c, so it can't be assignable to the right side type.

type T20 = [5] extends number[] ? "Yes" : "No"; //? Yes, because the left side type is a tuple with one element of type number, and the right side type is an array of numbers, so the left side type is assignable to the right side type.

type T21 = 5 extends number[] ? "Yes" : "No"; //? No, because the left side type is a primitive value, not an array.

type isString<T> = T extends string ? "yes" :"no";

type T22 = isString<"hello">; //? yes

type T23 = isString<5>; //? no

type T24 = isString<string>; //? yes

type T25 = isString<number>; //? no

export {}