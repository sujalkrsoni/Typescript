// @ts-check
let str = "hello"

console.log(str.toUpperCase())

// str = 2; // error will show, because we've enabled the @ts-check flag, otherwise it will fine !
console.log(str)


//? imp note that suppose we've declared a variable like this : let num = 10 then we're doing same into another file that ts think both code written into same file and there will issue occur of redeclration of variable so to avoid this we can simply use export {} at last ! 