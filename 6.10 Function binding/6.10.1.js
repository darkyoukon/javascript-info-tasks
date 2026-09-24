"use strict";
console.log("The first task: Bound function as a method");
// What will be the output?

function f() {
  console.log(this); // ?
}

let user = {
  g: f.bind(null),
};

user.g();

// The output will be null since 'bind' directly sets function's context
