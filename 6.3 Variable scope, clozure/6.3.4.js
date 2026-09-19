"use strict";
console.log("The fourth task: Counter object");
// Here a counter object is made with the help of the constructor function.

// Will it work? What will it show?

function Counter() {
  let count = 0;

  this.up = function () {
    return ++count;
  };
  this.down = function () {
    return --count;
  };
}

let counter = new Counter();

console.log(counter.up()); // 1
console.log(counter.up()); // 2
console.log(counter.down()); // 1
// It will work since the up() down() functions
// still have access to the LE of the 'Counter' function.
// But the 'count' variable is private in this case
