// Write a function min(a,b) which returns the least of two numbers a and b.

// For instance:
"use strict";

alert("The third task:");

function min(firstValue, secondValue) {
  return firstValue < secondValue ? firstValue : secondValue;
}

alert(min(2, 5)); // 2;
alert(min(3, -1)); // -1;
alert(min(1, 1)); // 1;
