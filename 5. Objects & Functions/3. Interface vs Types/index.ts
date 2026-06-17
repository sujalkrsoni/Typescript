interface myUserInterface {
    name : string;
    age : number;
    email : string;
}


// * here we can define multiple inteface with same name, but in the case of type we can't define multiple type with same name
interface myUserInterface {
    address : {
        houseNo : number,
        area : string,
        city : string,
        country : string
    }
}

// ? it doing declaration merging 

const user : myUserInterface = {
    name : "sujal", 
    age : 22, 
    email : "sujal@gmail.com",
    address : {
        houseNo : 123,
        area : "abc",
        city : "xyz",
        country : "India"
    }
}
console.log(user);



// ***************************************************************************************************************


//? Here we can't defined multiple type(object literals) with same name 

type TUser = {
    name : string;
    age : number; 
    email : string;
}


// ? here we can't define multiple type with same name
// type TUser = {
//     address : {
//         houseNo : number,
//         area : string,
//         city : string,
//         country : string
//     }
// }




// -----------------------------------------------------------------------------------------------------


// * in interface we can extends another interface 

interface IUser {
    name : string;
    age : number;
    email : string;
}

interface IAddress {
    houseNo : number;
    area : string;
    city : string;
    country : string;
}

interface IUserWithAddress extends IUser, IAddress {}

const userWithAddress : IUserWithAddress = {    
    name : "sujal",
    age : 22,
    email : "sujal@gmail.com",
    houseNo : 123,
    area : "abc",
    city : "xyz",
    country : "India",
}



// * To achive same thing in type we've to use intersection types

type TUser1 = {
    name : string;
    age : number;
    email : string;
}

type TAddress = {
    houseNo : number;
    area : string;
    city : string;
    country : string;
}  // or here we can simply simply use & operator and extend the TUser1 like this : type TAddress = {} & TUser1

type TUserWithAddress = TUser1 & TAddress; // don't use it always prefer to interface , because its slow 


const userWithAddress1 : TUserWithAddress = {    
    name : "sujal",
    age : 22,
    email : "sujal@gmail.com",
    houseNo : 123,
    area : "abc",
    city : "xyz",
    country : "India",
}



// diff 
// 1. Icons of both interface and Type Aliases are different.
// 2. cannot make duplication identifiers of Type Aliases
// 3. if we duplicate identifiers of interface its becomes combines
// 4. interfaces are built primarly for structure object data SVGUnitTypes
// 5. using "extend" keyword we can combine to different interfaces
// 6. Using AND(&) operator we can combine two Type Aliases