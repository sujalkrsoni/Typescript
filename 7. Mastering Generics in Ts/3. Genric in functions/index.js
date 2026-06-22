"use strict";
function myFunc(str) {
    return `Hello, ${str}`;
}
function myFunc2(str) {
    return (str) => `Hello, ${str}`;
}
console.log(myFunc2("world !"));
