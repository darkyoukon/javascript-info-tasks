"use strict";
console.log("The second task: Check for spam");

// Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.
// The function must be case-insensitive:

console.log(checkSpam("buy ViAgRA now")); // == true
console.log(checkSpam("free xxxxx")); // == true
console.log(checkSpam("innocent rabbit")); // == false

function checkSpam(str) {
  const searchStr = str.toLowerCase();
  return searchStr.includes("viagra") || searchStr.includes("xxx");
}
