class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

let john = new Person("John", 30);
john.greet(); // Hello, my name is John and I am 30 years old.
