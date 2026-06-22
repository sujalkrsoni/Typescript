function myFunc (str :string) : string {
    return `Hello, ${str}`;
}

type myFuncType<T> = (str : T) => T;
function myFunc2<T>(str : T) : T {
    return str;
}

const result = myFunc2<"world !">("world !");
console.log(result);