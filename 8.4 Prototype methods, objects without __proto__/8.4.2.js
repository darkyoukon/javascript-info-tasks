"use strict";
console.log("The second task: The difference between calls");

// Let’s create a new rabbit object:
function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function () {
  console.log(this.name);
};

let rabbit = new Rabbit("Rabbit");

// These calls do the same thing or not?
rabbit.sayHi(); // Output: "Rabbit"

// These are the same
Rabbit.prototype.sayHi(); // Output: "undefined"
Object.getPrototypeOf(rabbit).sayHi(); // Output: "undefined"
rabbit.__proto__.sayHi(); // Output: "undefined"
// The last one is outdated
