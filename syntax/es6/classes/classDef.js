#!/usr/bin/node

//Declaration

class Person{
    constructor(name, age, id) {
        this.name = name;
        this.age = age;
        this.id = id;
    }

    showId(){
        return (`id : ${this.id}`);
    }

    all_Bio() {
        return (
            `
            name : ${this.name}
            age : ${this.age}
            id : ${this.id}
            `
        );
    }
}


// instances :

const person1 = new Person("caleb", 22, 39430369);
const person2 = new Person("ali", 56, 11430700);
// console.log(person1.showId());
console.log(person2.all_Bio());
