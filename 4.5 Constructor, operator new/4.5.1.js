"use strict";
alert("The first task: Two functions – one object");

// Is it possible to create functions A and B so that new A() == new B()?

// function A() { ... }
// function B() { ... }

// let a = new A();
// let b = new B();

// alert( a == b ); // true
// If it is, then provide an example of their code.

const globalObject = {};

function FirstObjectConstructor() {
  return globalObject;
}
function SecondObjectConstructor() {
  // return new FirstObjectConstructor(); // works as well
  return globalObject;
}

let obj1 = new FirstObjectConstructor();
let obj2 = new SecondObjectConstructor();

alert(obj1 == obj2); // technically possible, but conventionally incorrect
