type isStringType<T> = T extends string ? true : false;

type A = isStringType<string>; // true
type B = isStringType<number>; // false
type C = isStringType<boolean>; // false
type D = isStringType<"hello">; // true
type E = isStringType<42>; // false
type F = isStringType<true>; // false
type G = isStringType<null>; // false
type H = isStringType<undefined>; // false



 