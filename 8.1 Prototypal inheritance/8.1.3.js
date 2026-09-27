"use strict";
console.log("The third task: Where does it write?");
// We have rabbit inheriting from animal.
// If we call rabbit.eat(),
// which object receives the full property: animal or rabbit?

let animal = {
  eat() {
    this.full = true;
  },
};

let rabbit = {
  __proto__: animal,
};

rabbit.eat();
// Of course 'rabbit' will receive the property 'full' since 'this' is brought
// from the object before the dot which is 'rabbit'
console.log(rabbit.full);
console.log(animal.full);
