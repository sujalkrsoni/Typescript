type person1 = {
    name: string;
    age : number;
}

type person2 = {
    name : string 
    age : string;
}

let obj1 : person1 | person2 = {
    name : "sujal", 
    age : "22" // can be number or string both 
};

let obj2 : person1 & person2 = {
    name : "sujal", 
    age : 22 // can't assign neither a number or string, because its intersection and asking for both type at once , so we can't assign string & number at once, don't assign any value, but if we don't assign then obj2 will give error age is missing 
}


// in interface this age conflict will not work when we use extends


interface IPerson1 {
    name : string, 
    age : string,
}

interface IPerson2 extends IPerson1 {
    name : string,
    age :number,
}

