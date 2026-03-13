"use strict";
console.log("The fourth task: Sort in decreasing order");

let arr = [5, 2, 1, -10, 8];

arr.sort((second, first) => first - second);

console.log(arr); // 8, 5, 2, 1, -10
