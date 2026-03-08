"use strict";
console.log("The first task: Uppercase the first character");

// Write a function ucFirst(str) that returns the string str with the uppercased first character, for instance:

console.log(ucFirst("john")); //== "John";
console.log(ucFirst(" "));

function ucFirst(str) {
  if (!str.trim()) return str;

  return str.at(0).toUpperCase() + str.slice(1);
  // return str.at?.(0)?.toUpperCase() + str.slice?.(1);
}
