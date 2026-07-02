type user = {
  name: string;
  age: number;
};

// type T = user[""] // ? on hover type T = any , and when we try to get suggestion then we can see the properties of user type like name and age , so we can access the properties of user type using index access type.
type T = user["name"]; // ? type T = string

// let obj : user[""] = {  //? we can also get suggestion here for the properties of user type like name and age , so we can access the properties of user type using index access type.
//     name : "sujal",
//     age : 22
// }

let obj: user = {
  name: "sujal",
  age: 22,
};

// here we can pass index into type property and array property as well

type strArray = string[];

// type T1 = strArray[""] //? here we can pass any number or array properties like length, push, pop, etc. and we can get the type of that property.

type T1 = strArray["29"]; // ? type T1 = string , because the array is of type string[] and the index 29 is a number, so the type of that index is string. basically strArr[29] will be a string

type T2 = strArray["length"]; // here we're trying to access the length property of the array , so it will be a number;

type T3 = strArray["push"];

// type T4 = ""[""] // we can also do like this, and here we can pass any string property like length, toUpperCase, charAt etc .

type T4 = ""["toUpperCase"];

type T5 = []["length"]; // ? type T5 = number , because the length property of an array is always a number.

// type T6 = (number | string)[""] // ? here we'll get only those properties which are common in both number and string types like toString, valueOf, etc.

type T6 = (number & string)[""]; // ? here we'll not get any properties because we can have a value which is both number and string at the same time, so there is no common properties between number and string types.

// ***************************************** Union into Property types *****************************************************************************************************************************************************************************

type T7 = "name"["length" | "toUpperCase" | "charAt"]; // ? type T7 = number | (() => string) | ((index: number) => string) , because the length property of a string is always a number, the toUpperCase property of a string is always a function which returns a string, and the charAt property of a string is always a function which takes an index as a parameter and returns a string.

type T8 = user["name" | "age"]; // ? type T8 = string | number , because the name property of user type is a string and the age property of user type is a number, so the union of both properties is string | number.

type T9 = ["hello", "world", 30]["0" | "1" | "2" | "find"]; // ? type T9 = "hello" | "world" | 30 , because the index 0 of the array is "hello", the index 1 of the array is "world", and the index 2 of the array is 30, so the union of all properties is "hello" | "world" | 3. and find method will be function , and that can be a number or string because the array is of type (string | number)[] and the find method returns a value of type (string | number) | undefined, so the union of all properties is "hello" | "world" | 30 | ((predicate: (value: string | number, index: number, array: (string | number)[]) => unknown, thisArg?: any) => string | number | undefined).

type T10 = [string, number]["4"]; // ? here we ccan't get any value because in this tuple we don't have any value at index 4, so the type of that index is undefined.
type T11 = [string, number]["0" | "1"]; // ? type T11 = string | number , because the index 0 of the tuple is string and the index 1 of the tuple is number, so the union of both properties is string | number.

type T12 = ["helllo"][number]; // its similar to ["hello"][0]

type T13 = user[keyof user]; // ? type T13 = string | number , because the keyof user is "name" | "age" and the name property of user type is a string and the age property of user type is a number, so the union of both properties is string | number.

type x = keyof user;
type T14 = user[x];





const roles = ["admin", "user", "guest"] as const;

type Role = typeof roles[number]; // ? type Role = "admin" | "user" | "guest" , because the typeof roles is readonly ["admin", "user", "guest"] and the number index of that array is 0, 1, 2, so the union of all properties is "admin" | "user" | "guest".


const permissions = { admin : ["read", "write", "delete", "update"], user : ["read", "write"], guest : ["read"] } as const;
type Permission = typeof permissions["admin"]; // ? type Permission = "read" | "write" | "delete" | "update" , because the typeof permissions is readonly ["read", "write", "delete", "update"] and the number index of that array is 0, 1, 2, 3, so the union of all properties is "read" | "write" | "delete" | "update".



function getPermissions(role : Role) : readonly string[]{
    return permissions[role];
}

console.log(getPermissions("admin")); // ? type of permissions["admin"] is "read" | "write" | "delete" | "update" , so the return type of getPermissions function is "read" | "write" | "delete" | "update".





















// ********************************** Extra stuff for time pass *********************************************

type roles = "admin" | "user" | "guest";

type permissions = "read" | "write" | "delete" | "update";

// function getPermissions(role: roles): permissions[] {
//   if (role === "admin") {
//     return ["read", "write", "delete", "update"];
//   }
//   if (role === "user") {
//     return ["read", "write"];
//   }
//   return ["read"];
// }

// console.log(getPermissions("admin"))


// 

const rolePermissions: Record<roles, permissions[]> = {
  admin: ["read", "write", "delete", "update"],
  user: ["read", "write"],
  guest: ["read"],
}; 


// console.log(rolePermissions["admin"]);





export {};
