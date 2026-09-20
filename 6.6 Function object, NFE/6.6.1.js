"use strict";
console.log("The first task: Set and decrease for counter");
// Modify the code of makeCounter() so that the counter can also decrease and set the number:
function makeCounter() {
  let currentNumber = 0;

  function counter() {
    return ++currentNumber;
  }

  counter.set = function (value) {
    return (currentNumber = value);
  };

  counter.decrease = () => --currentNumber;

  return counter;
}

const counter = makeCounter(); // should return the next number (as before).
console.log(counter());
console.log(counter.set(10)); // should set the counter to value.
console.log(counter.decrease()); // should decrease the counter by 1.
// See the sandbox code for the complete usage example.

// P.S. You can use either a closure or the function property to keep the current count. Or write both variants.
