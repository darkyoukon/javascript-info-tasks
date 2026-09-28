"use strict";
console.log("The second task: Create an object with the same constructor");
// Imagine, we have an arbitrary object obj,
// created by a constructor function – we don’t know which one,
// but we’d like to create a new object using it.

function ObjectConstructor() {}
// ObjectConstructor.prototype.constructor = ObjectConstructor;

const obj = new ObjectConstructor();
// Can we do it like that?

let obj2 = new obj.constructor();
// Give an example of a constructor function for obj
// which lets such code work right.
console.log(obj.__proto__.constructor);
console.log(obj2.__proto__ === obj.__proto__);

// And an example that makes it work wrong.
ObjectConstructor.prototype = { typical: true };
const obj3 = new ObjectConstructor();
const obj4 = new obj3.constructor();
console.log(obj3.__proto__.constructor);
console.log(obj3.__proto__);
console.log(obj3.__proto__ === obj4.__proto__);
