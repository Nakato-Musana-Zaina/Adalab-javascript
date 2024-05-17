function Person(name,age){
    this.name = name;
    this. age = age;
    this.greet = function(){
        console.log(`hello, my name is ${this.name} and i am ${this.age} years old`);
    }
    
};
const adam = new Person("Adam",30);
console.log(adam)
adam.language = 'English';
console.log({adam})

const eve = new Person("eve",20);
console.log({eve});

Person.prototype.nationality = "kenya";
console.log({adam});
console.log("adam_nationality", adam.nationality);
console.log("eve_nationality", eve. nationality)

eve.nationality = "Uganda";
console.log({eve});
console.log({adam});





