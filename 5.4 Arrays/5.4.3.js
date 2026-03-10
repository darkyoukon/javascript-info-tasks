"use strict";
console.log("The third task: Calling in an array context");

// What is the result? Why?

let arr = ["a", "b"];

arr.push(function () {
  console.log(this);
});

arr[2](); // Object("a", "b", function {...}) since arrs inherits objects logic
