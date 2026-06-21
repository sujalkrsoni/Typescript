type person1 = {
    name : string;
    age : number;
    eduction : string;
}

type person2 = {
    name : string;
    age : number;
    gender : string;
    email : string,
}

type T1 = person1 | person2;
type T2 = person1 & person2;



let obj1 : T1;
// obj1. // * only name and age is available, basically its saying minium this value will be there 

let obj2 : T2;
// obj2. // * all properties are available, must have these all values 

obj1 = {
    name : "Rahul",
    age : 22,
    eduction : "B.Tech",
    email : "sujal"
} // * in suggestion only getting name, age , eduction , but we can also add others too like email

console.log(obj1)

obj2 = {
    name : "Rahul",
    age : 22,
    gender : "Male",
    email : "rahul@gmail.com",
} // in suggestion getting all, but we're not adding here eduction , but when i dont pass all then get the error , basically saying all properties are required 


