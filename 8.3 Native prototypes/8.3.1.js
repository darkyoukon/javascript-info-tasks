"use strict";
console.log('The first task: Add method "f.defer(ms)" to functions');
// Add to the prototype of all functions the method defer(ms),
// that runs the function after ms milliseconds.
Function.prototype.defer = function (ms) {
  // setTimeout(() => this(), ms);
  setTimeout(this, ms);
};

// After you do it, such code should work:

function f() {
  console.log("Hello!");
}

f.defer(1000); // shows "Hello!" after 1 second
