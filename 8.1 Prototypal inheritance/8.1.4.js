"use strict";
console.log("The fourth task: Why are both hamsters full?");
// We have two hamsters: speedy and lazy inheriting
// from the general hamster object.

// When we feed one of them, the other one is also full. Why? How can we fix it?

let hamster = {
  eat(food) {
    this.stomach = [];
    this.stomach.push(food);
  },
};

let speedy = {
  __proto__: hamster,
};

let lazy = {
  __proto__: hamster,
};

// This one found the food
speedy.eat("apple");
console.log(speedy.stomach); // apple

// No longer has the food from the statement above on the 24th line
console.log(lazy.stomach); // undefined

// because the 'stomach' property was an 'array'
// in the prototype object 'hamster',
// whereas both objects inherited the same array
