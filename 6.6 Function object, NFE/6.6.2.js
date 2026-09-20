"use strict";
console.log("The second task: Sum with an arbitrary amount of brackets");
// Write function sum that would work like this:
console.log(String(sum(1)(2))); // == 3; // 1 + 2
console.log(+sum(1)(2)(3)); // == 6; // 1 + 2 + 3
console.log(String(sum(5)(-1)(2))); // == 6
console.log(String(sum(6)(-1)(-2)(-3))); // == 0
console.log(String(sum(0)(1)(2)(3)(4)(5))); // == 15
// direct cast to String() is called due to
// console.log doesn't call conversion methods

// P.S. Hint: you may need to setup custom object to primitive conversion for your function.
// function sum(a) {
//   sum.totalSum = (sum.totalSum ?? 0) + a;
//   if (!sum[Symbol.toPrimitive])
//     let resultSum;
//     sum[Symbol.toPrimitive] = function () {
//       [resultSum, sum.totalSum] = [sum.totalSum, 0];
//       return resultSum;
//     };
//   return sum;
// }

function sum(a) {
  let totalSum = a;

  function add(b) {
    totalSum += b;
    return add;
  }

  add[Symbol.toPrimitive] = () => totalSum;

  return add;
}

// function sum(a) {
//   function f(b) {
//     return sum(a + b);
//   }

//   f.toString = () => a;

//   return f;
// }
