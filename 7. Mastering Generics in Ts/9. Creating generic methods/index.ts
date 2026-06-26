// const strStore = {
//     list : ["sujal", "aman", "rahul", "sanjeev"], 
//     transformString (index : number) {
//         return `Hello, Mr.${this.list[index]}`;
//     }
// }

// console.log(strStore.transformString(3))


// -----------------------------------------------------------------------------------------------------------


// const strStore = {
//     list : ["sujal", "aman", "rahul", "sanjeev"], 
//     transformString <U>(index : number, cb : (item : string) => U) : U {
//         return cb(this.list[index]);
//     }
// }

// console.log(strStore.transformString(3, (name) => `Hello, Mr. ${name}`));
// console.log(strStore.transformString(0, (name) => `Hello, Mr. ${name.toUpperCase()}`));


// -----------------------------------------------------------------------------------------------------------

interface store <T>{
    list : T[];
    transformString <U>(index : number, cb : (item : T) => U) : U;
}


const strStore :store<string> = {
    list : ["sujal", "aman", "rahul", "sanjeev"], 
    transformString(index ,cb ){
        return cb(this.list[index]);
    }
}

console.log(strStore.transformString(3, (name) => `Hello, Mr. ${name}`));
console.log(strStore.transformString(0, (name) => `Hello, Mr. ${name.toUpperCase()}`));








