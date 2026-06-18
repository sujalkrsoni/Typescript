const myObj : object = {
    name : "sujal",
}


const myObj2 : object = new Date(); // here we can assign anythiign into object type which is getting from javascript , and that's why we prefer interface or type instead of js inbuild type 
// ? behind new Date() in js also a object 

console.log(typeof new Date()); // object
console.log(typeof function () {}); // function, but its also object behind 
console.log(typeof {}); // object
console.log(typeof []); // object
console.log(typeof /a/); // object , its regex 


// but if we try to assign any primitive into the object then we can't do that 

// const myObj3 : object = 10; //? error, here object is getting from js 

//* we use this object as type when we don't want primitive tyep , basically prevent the primitive type 