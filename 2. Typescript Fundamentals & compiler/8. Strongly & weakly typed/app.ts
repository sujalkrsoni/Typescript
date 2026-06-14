let num1 = 5 
let num2= 10 ;
console.log(num1 + num2)


let num3 = 15 ;
let num4 = "hello" ;

console.log(num3 + num4) // 15hello  , this is called type coercion, where the number is converted to a string and concatenated with the other string. and this is a weakly typed behavior, because the types are not strictly enforced and can be implicitly converted.


// but in TypeScript, we can have strong typing, where we can specify the types of variables and the compiler will enforce them. for example:

let num5: number = 20 ;
let num6: string = "world" ;

console.log(num5 + num6) // Error: Operator '+' cannot be applied to types 'number' and 'string'. This is because the types are strictly enforced and cannot be implicitly converted, which is a strong typing behavior.    
// so in TypeScript, we can have both strong and weak typing, depending on the use case.
console.log(num5 + Number(num6)) // 20 + NaN = NaN, because the string "world" cannot be converted to a number, resulting in NaN (Not a Number).