"use strict";
console.log("The fifth task: A maximal subarray");

// The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].

// The task is: find the contiguous subarray of arr with the maximal sum of items.

// Write the function getMaxSubSum(arr) that will return that sum.

// For instance:

console.log(getMaxSubSum([-1, 2, 3, -9])); // == 5 (the sum of highlighted items)
console.log(getMaxSubSum([2, -1, 2, 3, -9])); // == 6
console.log(getMaxSubSum([-1, 2, 3, -9, 11])); // == 11
console.log(getMaxSubSum([-2, -1, 1, 2])); // == 3
console.log(getMaxSubSum([100, -9, 2, -3, 5])); // == 100
console.log(getMaxSubSum([1, 2, 3])); // == 6 // (take all)
// If all items are negative, it means that we take none (the subarray is empty), so the sum is zero:

console.log(getMaxSubSum([-1, -2, -3])); // = 0
// Please try to think of a fast solution: O(n2) or even O(n) if you can.

function getMaxSubSum(arr) {
  let prevMaxSum = 0;
  let curMaxSum = 0;
  for (let curValue of arr) {
    curMaxSum += curValue;

    if (prevMaxSum < curMaxSum) prevMaxSum = curMaxSum;
    // else if (curMaxSum > 0) continue;
    // else curMaxSum = 0;
    if (curMaxSum < 0) curMaxSum = 0;
  }
  return prevMaxSum;
}
