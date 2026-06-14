let num = 5;

num.toUpperCase(); // Error: Property 'toUpperCase' does not exist on type 'number'.

console.log(num);
console.log(typeof num);


let obj = {
    name : "sujal", 
    age : 22
};

obj.age() // Error : This expression is not callable. Type 'number' has no call signatures.