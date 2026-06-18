
//? this will not work in module file, only work in global files
// interface window {
//     age : number;
// }

// window.age = 4


// * inside global interface we can add any property to the window object
// * but make sure this file should be module file  
declare global {
    interface Window {
        age: number;
    }
}

window.age = 24;

export {};


// ! we can't re-declare our interfaces because we're using eslint 

interface user {
    name : string;
}

interface user { // it will give error , here we can't use multiple interface with same name , because we're using the eslint here and there we've defined t
    age : number;
}

