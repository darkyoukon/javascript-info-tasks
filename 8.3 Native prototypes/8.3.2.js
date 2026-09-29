"use strict";
console.log('The second task: Add the decorating "defer()" to functions');
// Add to the prototype of all functions the method defer(ms),
// that returns a wrapper, delaying the call by ms milliseconds.
Function.prototype.defer = function (ms) {
  const savedFunction = this;
  return function (...args) {
    setTimeout(() => savedFunction.apply(this, args), ms);
  };
};
// Here’s an example of how it should work:

function f(a, b) {
  console.log(a + b);
}

f.defer(1000)(1, 2); // shows 3 after 1 second
// Please note that the arguments should be passed to the original function.
