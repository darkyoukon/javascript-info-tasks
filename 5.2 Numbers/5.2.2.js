"use strict";
alert("The second task: Why 6.35.toFixed(1) == 6.3?");

// According to the documentation Math.round and toFixed both round to the nearest number: 0..4 lead down while 5..9 lead up.

// For instance:

alert((1.35).toFixed(1)); // 1.4
// In the similar example below, why is 6.35 rounded to 6.3, not 6.4?

alert((6.35).toFixed(1)); // 6.3
// How to round 6.35 the right way?

alert((1.35).toFixed(20)); // 1.35000000000000008882
alert((6.35).toFixed(20)); // 6.34999999999999964473

const num = Math.round(6.35 * 100);
const properNum = num + (10 - (num % 10));
alert(properNum / 100);

alert((6.35 * 10).toFixed() / 10); // since 0.5 is 1/2 or 2**(-1)
// i.e. could be properly represented in a binary form
