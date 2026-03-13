"use strict";
console.log('The third task: Filter range "in place"');

// Write a function filterRangeInPlace(arr, a, b) that gets an array arr
// and removes from it all values except those that are between a and b.
// The test is: a ≤ arr[i] ≤ b.

// The function should only modify the array. It should not return anything.

// For instance:

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

console.log(arr); // [3, 1]

function filterRangeInPlace(arr, a, b) {
  arr.sort((item) => (item >= a && item <= b ? -1 : 1));
  arr.splice(arr.findIndex((item) => item < a && item > b) - 1);

  // arr.forEach((item, index) =>
  //   item >= a && item <= b ? item : arr.splice(index, 1),
  // );
}

console.time("myTimer"); // start timer

// some code you want to measure
for (let i = 0; i < 1000000; i++) {
  filterRangeInPlace(arr, 1, 4);
  arr.push(Math.round(Math.random() + 2) * 10);
}

console.timeEnd("myTimer"); // end timer and log elapsed time
