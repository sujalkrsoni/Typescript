function echo<T>(value: T) {
  return value;
}


const result1 = echo("Hello");  //* here on hover result1 then it will show const result1 : "hello" not string, because its treating like literal type.its happened in primitive types , but not work non primitive, if we wanna do same then we use as const . 
const result2 = echo(10);
const result3 = echo(true);

// for non primitive types we'll have to use as const for making literal types 
const result4 = echo({name : "sujal"});  //? {name : string} on hover result4 
const result5 = echo({name : "sujal" as const });  // ? {name : "sujal"} on hover result5 , when we use as const then it will treat as literal types 

const result6 = echo([1,2,3]);  //? number[] on hover result6
const result7 = echo([1,2,3] as const);  //? readonly [1,2,3] on hover result7

//* const modifier is used to make literal types

function echo2<const T> (value : T) {
    return value;
}

const result8 = echo2("Hello");
const result9 = echo2(10);
const result10 = echo2(true);
const result11 = echo2({name : "sujal"});  //?  readonly name: "sujal"; on hover result11
const result12 = echo2([1,2,3]) // ? const result12: readonly [1, 2, 3] 
// * here no need of writing as const everywhere , because we've wrote const in function declaration itself.


// * and we can also do like this : create a type and defined const there and use that into a function 
type T = <const T> (value : T) => T;

const myFunc : T = (value) => value;

const result13 = myFunc("Hello");
const result14 = myFunc(10);
const result15 = myFunc(true);
const result16 = myFunc({name : "sujal"});  //?  readonly name: "sujal"; on hover result11  

