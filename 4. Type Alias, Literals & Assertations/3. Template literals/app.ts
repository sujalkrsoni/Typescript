type endpoint = "users" | "posts" | "comments"; // type is a union of string literals

let data : `/api/${endpoint}` = "/api/users"; // This is valid

data = "/api/posts"; // This is valid

data = "/api/comments"; // This is valid



// * or we can simply do like this :

type Endpoints = `/api/${"users" | "posts" | "comments"}`; // type is a union of string literals

let myData : Endpoints = "/api/posts"; // here you'll get all types of endpoints as suggestions in VSCode
