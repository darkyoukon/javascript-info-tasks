"use strict";
alert('The first task: Using "this" in object literal');
// Here the function makeUser returns an object.

// What is the result of accessing its ref? Why?

function makeUser() {
  return {
    name: "John",
    ref: this,
    properRef() {
      return this;
    },
  };
}

let user = makeUser();

alert(user.properRef().name);
alert(user.properRef.name); // outputs just function name
alert(user.ref.name); // What's the result?

// Actually there won't be any output
// 'this' keyword could be used in methods, not in object's properties
// since 'this' context becomes defined at a func call, not at definition stage
