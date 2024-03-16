let a  =20;
let b= 30;

let add = a+b;
console.log({add});

let subtract = a-b;
console.log({subtract});

let divide = a/b;
console.log({divide});

let multiply = a*b;
console.log({multiply});

let c ="20";
let looselyEqualTo = a ==c;
console.log({looselyEqualTo});

let strictlyEqualTo = a === c;
console.log({strictlyEqualTo});

let notEqualTo = a != c;
console.log({notEqualTo});

let strictlyNotEqualTo = a !== c;
console.log({strictlyNotEqualTo});

// This is an increment
a++
console.log({a});

// This is a decreement
b--;
console.log({b});

a+=5;
console.log({a});

// Implicit
let d = 1*c;
console.log({d});

let e = +c;
console.log({e});

// Explicit
let f = Number(c);
console.log({f});