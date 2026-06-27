const arr = new Array()
arr.push(1)
arr.push("2")
arr.push(true)

// console.log(arr) //* here we can see that the array is of type any[] because we have pushed different types of values into it.

const arr2 = new Array(10) // here we have created an array of length 10 but we haven't specified the type of the array so it will be of type any[]
console.log(arr2) // Output: [ <10 empty items> ]


const arr3 = new Array(10,12) // here we have created an array of length 2 and we have specified the type of the array as number[] so it will be of type number[], and adding the values 10 and 12 to the array
console.log(arr3) // Output: [ 10, 12 ]


const arr4 = new Array(10, "hello", true, { name: "John" }) // ! Error because we have specified the type of the array as number[] so we can't add different types of values to it.
const arr5 = new Array([10, "hello", true, { name: "John" }])  // here we have created an array of length 1 and we have specified the type of the array as (number | string | boolean | { name: string })[] so it will be of type (number | string | boolean | { name: string })[], and adding the values 10, "hello", true, { name: "John" } to the array
console.log(arr5) // Output: [ [ 10, 'hello', true, { name: 'John' } ] ]


const arr6 = new Array<number>(10, 20, 30) // here we have created an array of length 3 and we have specified the type of the array as number[] so it will be of type number[], and adding the values 10, 20, 30 to the array
console.log(arr6) // Output: [ 10, 20, 30 ]

const arr7 = new Array<number>(10, 20, 30, "hello") // ! Error because we have specified the type of the array as number[] so we can't add different types of values to it.
const arr8 = new Array<string>("hello", "world") // here we have created an array of length 2 and we have specified the type of the array as string[] so it will be of type string[], and adding the values "hello", "world" to the array
console.log(arr8) // Output: [ 'hello', 'world' ]

const arr9 = new Array<boolean>(true, false, true) // here we have created an array of length 3 and we have specified the type of the array as boolean[] so it will be of type boolean[], and adding the values true, false, true to the array
console.log(arr9) // Output: [ true, false, true ]

const arr10 = new Array<{ name: string, age: number }>({ name: "John", age: 30 }, { name: "Jane", age: 25 }) // here we have created an array of length 2 and we have specified the type of the array as { name: string, age: number }[] so it will be of type { name: string, age: number }[], and adding the values { name: "John", age: 30 }, { name: "Jane", age: 25 } to the array
console.log(arr10) // Output: [ { name: 'John', age: 30 }, { name: 'Jane', age: 25 } ]



const arr11 : Array <boolean> = []
arr11.push(true)

const arr12 : boolean[] = []  // this and upper one are same, this is just a different syntax to define an array of boolean type
arr12.push(false)


const arr13 : Array <string> = new Array() // this same format can be apply on map and set too !
arr13.push("hello")




// ***********************************************************************************************************************************


// ? map is a collection of key-value pairs where each key is unique and maps to a specific value. It is similar to an object, but it allows for keys of any type, including objects and functions. Maps are iterable, meaning you can loop through their entries, and they maintain the order of insertion.
// ? it has set and get methods to add and retrieve values from the map. The set method is used to add a new key-value pair to the map, while the get method is used to retrieve the value associated with a specific key. If the key does not exist in the map, the get method will return undefined.


const map1 = new Map()
map1.set("name", "John")
console.log(map1) // Output: Map(1) { 'name' => 'John' }

const map2 = new Map<string, number>() // here we have created a map and we have specified the type of the map as Map<string, number> so it will be of type Map<string, number>, and adding the values "name" and 30 to the map
map2.set("age", 30)
map2.set(false, 180) // ! Error because we have specified the type of the map as Map<string, number> so we can't add different types of values to it.
console.log(map2) // Output: Map(1) { 'age' => 30 }




// **********************************************************************************************************************


// ? Set is a collection of unique values, where each value can only appear once. It is similar to an array, but it does not allow for duplicate values. Sets are iterable, meaning you can loop through their elements, and they maintain the order of insertion.

const set1 = new Set()
set1.add(1)
set1.add(2)
set1.add(3)
set1.add(3) // ! Error because we have added the value 3 twice, and sets do not allow for duplicate values.
console.log(set1) // Output: Set(3) { 1, 2, 3 }



const set2 = new Set<number>() // here we have created a set and we have specified the type of the set as Set<number> so it will be of type Set<number>, and adding the values 1, 2, 3 to the set
set2.add(1)
set2.add(2)
set2.add(3)
set2.add("4") // ! Error because we have specified the type of the set as Set<number> so we can't add different types of values to it.
console.log(set2) // Output: Set(3) { 1, 2, 3 }







// *********************************************************************************************************************************************************************************************************

interface user {
    name : string;
    age : number;
}

const user : Readonly<user> = { // here we have created a user object and we have specified the type of the user object as Readonly<user> so it will be of type Readonly<user>, and adding the values "John" and 30 to the user object
    name : "John",
    age : 30
}

user.name = "Jane" // ! Error because we have specified the type of the user object as Readonly<user> so we can't modify the values of the user object.
user.age = 25 // ! Error because we have specified the type of the user object as Readonly<user> so we can't modify the values of the user object.


// ? Make sure there are two diff readOnly, Readonly 
// Readonly is a utility type that takes an object type and makes all of its properties read-only, meaning they cannot be reassigned or modified. It is used to create immutable objects, which can help prevent unintended side effects and improve code safety. The Readonly type is often used in TypeScript to enforce immutability in data structures, especially when working with complex objects or APIs.
// readonly is a modifier that can be applied to individual properties of an object type, making them read-only. It is used to create immutable properties within an object, preventing them from being reassigned or modified. The readonly modifier can be used in combination with other types, such as interfaces or classes, to enforce immutability on specific properties while allowing other properties to remain mutable.

type user2 = {
    readonly name : string;
    age : number;
}

const user2 : user2 = {
    name : "John",
    age : 30
}

user2.name = "Jane" // ! Error because we have specified the name property as readonly, so we can't modify the value of the name property.



// ******************************************************************************************************************************************


const myArr : ReadonlyArray<number> = [1, 2, 3] // here we have created an array and we have specified the type of the array as ReadonlyArray<number> so it will be of type ReadonlyArray<number>, and adding the values 1, 2, 3 to the array
myArr.push(4) // ! Error because we have specified the type of the array as ReadonlyArray<number> so we can't modify the values of the array.
myArr[0] = 10 // ! Error because we have specified the type of the array as ReadonlyArray<number> so we can't modify the values of the array.


