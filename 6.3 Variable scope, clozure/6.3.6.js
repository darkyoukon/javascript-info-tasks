"use strict";
console.log("The sixth task: Sum with clozures");
// Write function sum that works like this: sum(a)(b) = a+b.

// Yes, exactly this way, using double parentheses (not a mistype).

// For instance:

console.log(sum(1)(2)); // = 3
console.log(sum(5)(-1)); // = 4

function sum(firstNumber) {
  //   function add(secondNumber) {
  //     return firstNumber + secondNumber;
  //   }
  //   return add;
  return (secondNumber) => firstNumber + secondNumber;
}
