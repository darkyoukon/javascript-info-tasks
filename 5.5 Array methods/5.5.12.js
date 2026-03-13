"use strict";
console.log("The 12th task: Filter unique array members");

// Let arr be an array.

// Create a function unique(arr) that should return an array with unique items of arr.

// For instance:

function unique(arr) {
  // const set = [];
  // arr.forEach((item) => {
  //   if (!set.includes(item)) set.push(item);
  // });
  // return set;

  // assuming that we only have strings in array
  // const set = {};
  // arr.forEach((item) => {
  //   if (!set[item]) set[item] = 0;
  //   else ++set[item];
  // });
  // return Object.keys(set);

  return arr.filter((item, index) => arr.indexOf(item) === index);
}

let strings = [
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

console.log(unique(strings)); // Hare, Krishna, :-O
