type T1 = {
    name : string;
    age : number;
} 

type T2 = {
    name : string;
    age : string;
}

function printDetails(obj : T1 | T2) : void{
    obj.age = 22
}