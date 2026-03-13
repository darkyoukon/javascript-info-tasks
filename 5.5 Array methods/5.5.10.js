"use strict";
console.log("The tenth task: Shuffle an array");

// Write the function shuffle(array) that shuffles
// (randomly reorders) elements of the array.

// Multiple runs of shuffle may lead to different orders of elements.

// All element orders should have an equal probability. For instance,
// [1,2,3] can be reordered as [1,2,3] or [1,3,2] or [3,1,2] etc,
// with equal probability of each case.

function shuffle(arr) {
  // Lesson's solution, Fisher-Yates shuffle
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  // Much slower implementation because of splice + splice * arr.length
  // const tempArr = [];
  // let randomIndex;
  // for (let i = 0; i < arr.length; ++i) {
  //   randomIndex = Math.floor(arr.length * Math.random());
  //   tempArr.push(arr[randomIndex]);
  //   arr.splice(randomIndex, 1);
  // }
  // arr.splice(0, 0, ...tempArr);
}

// counts of appearances for all possible permutations
let count = {};

console.time("Algorithm time");
// let array = [1, 3, 2, 5, 6];
for (let i = 0; i < 1000000; i++) {
  let array = [1, 3, 5];
  shuffle(array);
  if (!count[array.join("")]) count[array.join("")] = 1;
  count[array.join("")]++;
}
console.timeEnd("Algorithm time");

// show counts of all possible permutations
for (let key in count) {
  console.log(`${key}: ${count[key]}`);
}
