"use strict";
console.log("The first task: Class extends Object?");
// As we know, all objects normally inherit from Object.prototype
// and get access to “generic” object methods like hasOwnProperty etc.

// For instance:

class Rabbit {
  constructor(name) {
    this.name = name;
  }
}

let rabbit = new Rabbit("Rab");

// hasOwnProperty method is from Object.prototype
console.log(rabbit.hasOwnProperty("name")); // true
// But if we spell it out explicitly like "class Rabbit extends Object",
// then the result would be different from a simple "class Rabbit"?

// What’s the difference?

// Here’s an example of such code (it doesn’t work – why? fix it?):

class Rabbit2 extends Object {
  constructor(name) {
    super(); // should be called in case class inherits from another entity
    this.name = name;
  }
}

let rabbit2 = new Rabbit2("Rab");

console.log(rabbit2.hasOwnProperty("name")); // true

// Object.prototype methods became available as well for Rabbit2
console.log(Rabbit2.getOwnPropertyDescriptors(rabbit2));

// Not for the Rabbit though
console.log(Rabbit.getOwnPropertyDescriptors(rabbit)); // Error
