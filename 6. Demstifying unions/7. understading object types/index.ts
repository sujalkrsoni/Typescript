type T1 = {}
type T2 = { length : number }
type T3 = { length : number , name : string}
type T4 = { toString () : () => string }


let myValue : T2 = "sujal" // here we can also do like this, because here we've defined that we can assign string to T2 type which will have a length property. 
console.log(myValue.length) // 5 

// we can also assign a functino into myValue , in t2 type there is lenght property and in function we've also a lenght property 

myValue = function (str : string) {} 

console.log(myValue.length) // 1 

// we've already solve this problem and understand it, in last video of last section , because sir asked this question and i've solved it there. and there is depth details about {} type . 


// and we can also assign a value whose name will be length and value will be number

myValue = { length : 10 } 

console.log(myValue.length) // 10

