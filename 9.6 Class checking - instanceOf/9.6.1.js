"use strict";
console.log("The first task: Strange instanceof");
// In the code below, why does instanceof return true?
// We can easily see that a is not created by B().

function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

console.log(a instanceof B); // true
// Since F.prototype is set to the same object, hence objects created using
// new A(), new B() inherits the same [[Prototype]] === {}, and instanceof
// looks whether there is the same object (to a.__proto__)
// in the whole chain of prototypes of B
