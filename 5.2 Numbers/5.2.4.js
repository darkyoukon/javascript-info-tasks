"use strict";
alert("The fourth task: An occasional infinite loop");

// This loop is infinite. It never ends. Why?

let i = 0;
while (i != 10) {
  i += 0.2;
}

// because of floating number value precision (mantissa not precise enough)
// 9.999999999999996 !== 10
