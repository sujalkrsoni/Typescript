function myFunc (a){
    return a.toUpperCase();
}

function myFunc(a){
    return a.toFixed(3)
}

console.log(myFunc("hello")) //return a.toFixed(3)  //?TypeError: a.toFixed is not a function

//?Function overloading is not supported in Javascript.
// it basically uses latest function , it doesn't use the previous one.
// so its fails 