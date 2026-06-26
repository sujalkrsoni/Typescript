type dynamicType<T> = {
    value : T;
}

let a : dynamicType<String> = {
    value : "Hello"
}

console.log(a.value); // Output: Hello


let b : dynamicType<"hii"> = {
    // value : "Hello",   //!  Error: Type '"Hello"' is not assignable to type '"hii"'.
    value : "hii"
}


// * nested generics

let c : dynamicType<dynamicType<string>> = {
    value : {
        value : "Hello"
    }
}

console.log(c.value.value); // Output: Hello





// ? Another example of nested generics with diff generics 


type dynamicType2<T, U, V> = {
    value : T;
    value2 : U;
    value3 : V;
    value4 : dynamicType<T>;
}

let d : dynamicType<dynamicType2<string, number, string[]>> = {
    value : {
        value : "Hello",
        value2 : 123,
        value3 : ["world"],
        value4 : {
            value : "Nested"
        }
    },
    
}

console.log(d.value);  // Output: { value: 'Hello', value2: 123 }
console.log(d.value.value); // Output: Hello
console.log(d.value.value2); // Output: 123
console.log(d.value.value3); // Output: ['world']
console.log(d.value.value4.value); // Output: Nested




// Real Use Case of Nested Generic as backend developer :
// for the sending data to frontend in api calls :

type pagination = {
    page : number;
    limit : number;
    total : number;
    itemPerPage : number;
}

type status = {
    code : number; 
    message : string;
    status : "success" | "error";
}

type userData = {
    id : string;
    name : string;
    email : string;
}


type apiResponse<T> = {
    pagination : pagination;
    status : status;
    data : T;
}

let response : apiResponse<userData[]> = {
    pagination : {
        page : 1,
        limit : 10,
        total : 100,
        itemPerPage : 10,
    },
    status : {
        code : 200,
        message : "Get all user data successfully",
        status : "success"
    },
    data : [
        {
            id : "1",
            name : "sujal",
            email : "sujal@gmail.com"
        },
        {
            id : "2",
            name : "sanjeev",
            email : "sanjeev@gmail.com"
        }
    ]
}















