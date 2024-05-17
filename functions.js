function add (num1,num2){
    const sum = num1+num2;
    console.log({console:sum});
    return{"sum":sum};

}
console.log(add(2,3));
add(4,5);
let student = "agnes"
let child = 'girl'

function item(){
    const names = ['Anne','Eunice'];
    console.log(names)

}
const subtract  = function(num1, num2){
console.log(num1-num2);
};
subtract(20, 10);

const  multiply=(num1,num2) =>console.log(num1*num2);
multiply(6,9);

//iifes
(function() { 
    console.log('hello there')
})();
//hoisting
console.log({person});
var person;
console.log("person 2..",person)
greet()

function greet(){
console.log("hey there")
}

hello();
const hello = () => console.log("This is a greeting");