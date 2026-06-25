type dynamicType<T, U> = T & U;

const a : dynamicType<{ name: string }, { age: number }> = {
    name: "John",
    age: 30
};

console.log(a.name); // Output: John
console.log(a.age);  // Output: 30


// multiple params in interface generics 

interface dynamicInterface<T, U> {
    name: T;
    age: U;
}

const b : dynamicInterface<string, number> = {
    name: "John",
    age: 30
};

console.log(b.name); // Output: John
console.log(b.age);  // Output: 30



// dynamic params in function generics

function getTuple<T, U>(param1: T, param2: U): [T, U] {
    return [param1, param2];
}

const tuple = getTuple("Hello", 42);
console.log(tuple); // Output: ["Hello", 42]