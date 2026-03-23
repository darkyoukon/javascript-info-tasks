"use strict";
console.log("The second task: Filter anagrams");

// Anagrams are words that have the same number of same letters, but in different order.

// For instance:

// nap - pan
// ear - are - era
// cheaters - hectares - teachers
// Write a function aclean(arr) that returns an array cleaned from anagrams.

// For instance:

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"
// From every anagram group should remain only one word, no matter which one.

function aclean(arr) {
  // plain object can be used as well since keys are just plain strings
  let uniqueValues = new Map();
  let properValue;
  for (let value of arr) {
    properValue = value.toLowerCase().split("").sort().join();
    if (uniqueValues.get(properValue)) continue; // could be skipped
    uniqueValues.set(properValue, value);
  }
  return [...uniqueValues.values()];
}
