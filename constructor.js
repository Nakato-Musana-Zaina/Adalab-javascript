class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;

    }
    greet(){
        console.log(
            `hello, my name is ${this.name} and i am ${this.age} years old`);
    }
}
const adam = new Person('adam' , 30)
console.log({adam});

class Student extends Person{
    constructor(name,age,school){
        super(name, age)
        this.school=school
    }
    profession(){
        console.log(`I am a Student at ${this.school}`)
    }
}
console.log(Student)

