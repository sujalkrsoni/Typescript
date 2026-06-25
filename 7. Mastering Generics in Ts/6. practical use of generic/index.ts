type myFuncType= <T, U>(param1 : T, param2: U) => T & U;

const myFunc : myFuncType = (param1, param2) => {
    return { ...param1, ...param2 };
}

const result = myFunc({ name: "Alice" }, { age: 25 });
console.log(result); // Output: { name: "Alice", age: 25 }

const myFunc2 : myFuncType =  function (param1, param2) {
   return ({ ...param1, ...param2 });
}



const myMap = <T, U>(arr : T[] , callback : (item : T) => U) => {
    return arr.map(callback);
}

const result2 = myMap([1,2,3,4], (item) => item * 2);
console.log(result2); // Output: [2, 4, 6, 8]



// function map(arr : any , callback : any ){
//     const output = [];

//     for ( const item of arr){
//         output.push(callback(item));
//     }
//     return output;
// }

// const result3 = map([1,2,3,4], (item : any) => item * 2);



// using dynamic params in functions generics

function map<T, U>(arr : T[] , callback : (item : T) => U) : U[] {
    const output : U[] = [];

    for ( const item of arr){
        output.push(callback(item));
    }
    return output;
}

const result3 = map([1,2,3,4], (item : number) => item * 2);
const result4 = map(["hello", "hi"], (item : string) => item.toUpperCase());