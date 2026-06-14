let a : any = 5;
let b : unknown = 10;

console.log(a + b) // 15, because 'any' type allows for implicit type coercion, while 'unknown' type does not allow for any operations without type assertions or checks. In this case, 'b' is treated as a number and added to 'a', resulting in 15.


a.toLowerCase() // it doesn't give error, It allows conversation without knowing the type 
b.toLowerCase() // it givevs error, to fix it we'll have to use it inside condition 

if(typeof b == "string"){
    b.toLowerCase() 
}