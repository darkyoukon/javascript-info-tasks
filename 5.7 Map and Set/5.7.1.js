"use strict";
console.log("The first task: Filter unique array members");

// Let arr be an array.
// Create a function unique(arr) that should return an array with unique items of arr.
// For instance:

function unique(arr) {
  return Array.from(new Set(arr));
  // return [...new Set(arr).values()];
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

console.log(unique(values)); // Hare, Krishna, :-O

// P.S. Here strings are used, but can be values of any type.
// P.P.S. Use Set to store unique values.
