interface user {
    name : string, 
    age : number, 
    greet : () => void 
    welcomeGreet : () => void,
    marks : (sub1 : number, sub2 : number, sub3 : number) => number
}

const user1 : user = {
    name : "John",
    age : 25,
    greet : () => {
        console.log(`Hello ${user1.name}`) // in arrow function this keyword not work , so we'll have to use user1.name
    },
    welcomeGreet(){
        console.log(`hello, welcome ${this.name}`)
    },
    marks : (sub1, sub2, sub3) => {
        return sub1 + sub2 + sub3
    }
}

user1.greet()
user1.welcomeGreet()
console.log(user1.marks(10, 20, 30));