"use strict";
console.log("Function property after bind");
// There’s a value in the property of a function. Will it change after bind? Why, or why not?

function sayHi() {
  console.log(this.name);
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "John",
});

console.log(bound.test); // what will be the output? why?
// I guess properties of a function don't get saved the same as for call/apply
// The result of bind is another object.
