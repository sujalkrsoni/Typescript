type User = {
    name : string;
    age : number;
    email : string;
}

// type T = {
//     [key in keyof User as `get${key}`] : () => User[key];
// }


type T = {
    [key in keyof User as `get${Capitalize<key>}`] : () => User[key];
}

type T1 = Uppercase<"hello">


export {}