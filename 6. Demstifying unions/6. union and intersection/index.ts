type T = string | "hi";       // string
type T1 = string & "hii"      // "hii"
type T2 = boolean & false     // false
type T3 = boolean | false     // boolean



type T4 = Exclude< boolean, false> // true 
type T5 = Exclude< boolean, true> // false
type T6 = Extract< boolean, true> // true


type T7 = string | `hello, ${string}`    // string
type T8 = string & `hello, ${string}`    // `hello, ${string}`

type T9 = unknown | `hello, ${string}`    // unknown
type T10 = unknown & `hello, ${string}`    // `hello, ${string}`
type T11 = string | boolean

type T12 = unknown & T11     // string | boolean
type T13 = unknown | T11     // unknown

type T14 = string |  number   // string | number
type T15 = string &  number    // never

type T16 = string & boolean    // never
type T17 = false & true        // never
type T18 = "bye" & "by"        // never

type T19 = never | "bye"       // bye 
type T20 = never & "bye"       // never


let a : number = 20;
let b : string = "hello";
let c : string | number ;
// c. // * here you'll get common methods of number and string , only 3 methods 
c = 20; // * here you'll get common methods of number and string , only 3 methods

// c. // * here you'll get numbers all methods 


type T21 = "apple" | "mango" | "banana" | "orange";

type T22 = Exclude < T21, "apple" | "banana"> // "mango" | "orange"
type T23 = Extract < T21, "apple" | "banana"> // "apple" | "banana"
type T24 = Exclude < T21, "apple" | "banana"> & "mango" // "mango"

type T25 = Exclude < true , false> // true // * here you'll get true because of here there is not common b/w true and false so we'll not remove anything from true then true be returned 
type T26 = Exclude < true, boolean > // never // * here true is common and from boolean if we'll remove true then there will not be any common then it will return never ! 


// another syntaxx
type T27 = 
  | "apple"
  | "mango"
  | "banana"
  | "orange"
    
type T28 = & "apple"  // we can also do like this 



type t29 = { length : number};

const myObj : t29 = "sujal"