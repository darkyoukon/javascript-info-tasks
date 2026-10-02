"use strict";
console.log("The first task: Error creating an instance");
// Here’s the code with Rabbit extending Animal.

// Unfortunately, Rabbit objects can’t be created. What’s wrong? Fix it.

class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Rabbit extends Animal {
  constructor(name) {
    // this.name = name;
    super(name);
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("White Rabbit");
console.log(rabbit.name);
