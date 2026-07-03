
type dataTypes = {
    name : string,
    age : number,
    email : string,
    address : {
        street : string,
        city : string,
        state : string,
        zip : string
    }
}



// type T = {
//     [key in keyof dataTypes] : dataTypes[key] | key;  //? we can also do like this , 
// }



// type T = {
//     [key in string | number | symbol] : boolean;
// }


type T = {
    [key in keyof dataTypes] : dataTypes[key];
}

const user : T = {
    name: "John",
    age: 22,
    email: "john@gmail.com",
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
        zip: "10001"
    }
}

console.log(user)











// map type in generics 

type convertPropertiesToArray <T> = {
    // [k in keyof T] : T[k][]; //? return arrays 
    [k in keyof T] : T[k];
}

//! Note : Map doesn't work with interefaces 
// ! but we can use index signatures in interfaces to achieve the same functionality as mapped types.

interface I {
    [key : string] : string;
}


export {}
