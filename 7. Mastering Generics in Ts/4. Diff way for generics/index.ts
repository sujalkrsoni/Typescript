
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



// ? 5th way

