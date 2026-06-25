
// ? 1st way 

function echo<T> (val : T) : T {
    return val;
}

const echoNumber = echo<number>(10);
const echoString = echo<string>("Hello");

console.log(echoNumber);
console.log(echoString);



// ? 2nd way

const echo2 = <T>(val : T) : T => {
    return val;
}

const echoNumber2 = echo2(20);  
const echoString2 = echo2("world!");

console.log(echoNumber2);
console.log(echoString2);


// ? 3rd way

const echo3 = function <T>(val : T) : T {
    return val;
}

const echoNumber3 = echo3(30);  
const echoString3 = echo3("world!");

console.log(echoNumber3);
console.log(echoString3);



// ? 4th way

// type EchoFuncType = <T> (val : T)  => T; //! using type 

interface EchoFuncType {
    <T>(val : T) : T;
}

const echo4 : EchoFuncType = function (val) {
    return val;
}

const echoNumber4 = echo4(40);
const echoString4 = echo4("world!");

console.log(echoNumber4);
console.log(echoString4);



//? Genric Type & Genric functions 

type myGenType<T> = (str : T) => T // Generic type
type myGenTypeInterface<T> = (str : T) => T // Generic interface

const myGenFunc : myGenType<string> = (str) => str;
const myGenFunc2 : myGenTypeInterface<number> = (num) => num;

console.log(myGenFunc("Hello"));   
 console.log(myGenFunc(23));  //! Error : Argument of type 'number' is not assignable to parameter of type 'string'.
console.log(myGenFunc2("hello"));  //! Error : Argument of type 'string' is not assignable to parameter of type 'number'.   
console.log(myGenFunc2(23));   // here we can see that, we can use generic type & generic interface to create generic functions, but we have to specify the type of data we want to use in it.


// * in generic type & generic interface, we can use any type of data we want to use in it, but we have to specify the type of data we want to use in it.

// ! and there is another term that we can generic functions, which allows us to create generic functions without specifying the type of data we want to use in it, and that is called "Generic Functions".
// ! basically, generic functions are functions that can work with any type of data, and we can specify the type of data we want to use in it when we call the function.





// * generic functions :
// ! generic functions using type :
type myGenFuncType = <T>(str : T) => T;  // here we can see that, we can use generic functions to create generic functions, and we can specify the type of data we want to use in it when we call the function.

const myGenFunc3 : myGenFuncType = (val) => val;  // here look the syntax of generic functions, we can use the generic type in the function parameter, and we can specify the type of data we want to use in it when we call the function.

console.log(myGenFunc3("Hello")); 
console.log(myGenFunc3(23));  
console.log(myGenFunc3(true));   // here look we can use any type of data we want to use in it, and we can specify the type of data we want to use in it when we call the function.




// * generic functions using interface :
interface myGenFuncInterface {
    <T>(str : T) : T;  // here we can see that, we can use generic functions to create generic functions, and we can specify the type of data we want to use in it when we call the function.
}

const myGenFunc4 : myGenFuncInterface = (val) => val;  // here look the syntax of generic functions, we can use the generic type in the function parameter, and we can specify the type of data we want to use in it when we call the function.

console.log(myGenFunc4("Hello")); 
console.log(myGenFunc4(23));  
console.log(myGenFunc4(true));   // here look we can use any type of data we want to use in it, and we can specify the type of data we want to use in it when we call the function.

