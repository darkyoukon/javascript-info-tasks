// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
// Create a web-page that prompts for x and n, and then shows the result of pow(x,n).
// P.S. In this task the function should support only natural values of n: integers up from 1.
"use strict";

alert("The fourth task:");

function pow(base, exponent) {
  if (exponent <= 1) return base;
  else return base * pow(base, --exponent);
}

alert(pow(3, 2)); // 3 * 3 = 9
alert(pow(3, 3)); // 3 * 3 * 3 = 27
alert(pow(1, 100)); // 1 * 1 * ...* 1 = 1
