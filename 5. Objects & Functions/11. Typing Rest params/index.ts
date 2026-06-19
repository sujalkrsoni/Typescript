function test(a: string, b : boolean, ...myParams : number[]) {
    console.log(a, b, myParams);
}

test("hello", false, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Output: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

//* Rest parameter should be at last ---------------


