type user = {
    name : string;
    age : number;
    email? : string;
    readonly password : string; 
}

// type T1 = {
//     [key in keyof user] -? : user[key];  //* -? remove the optional property modifier from the properties of user type
// }

type T1 = {
    [key in keyof user] +? : user[key];  // +? add the optional property modifier to the properties of user type
}


type T2 = {
    +readonly [key in keyof user as `get${Capitalize<key>}`] : () => user[key];  //? add readonly into all properties 
}


type T3 = {
    -readonly [key in keyof user as `get${Capitalize<key>}`] : () => user[key];  //? remove readonly into all properties 
}

// ! building our own utility types for property modifiers using generics 
type myReadOnly<T> = {
    +readonly [key in keyof T] : T[key];  //? add readonly into all properties
}

type T6 = myReadOnly<user>;

type myPartial<T> = {
     [key in keyof T] +? : T[key];  //? add optional into all properties
}

type T7 = myPartial<user>;

type myRequired<T> = {
    [key in keyof T] -?  : T[key];  //? remove optional into all properties
}

type T8 = myRequired<user>;


export {}