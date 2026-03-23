"use strict";
console.log("The third task: Iterable keys");

// We’d like to get an array of map.keys() in a variable and then apply array-specific methods to it, e.g. .push.

// But that doesn’t work:

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());
// console.log(keys);

// Error: keys.push is not a function
keys.push("more");
// Why? How can we fix the code to make keys.push work?
// Since map.keys() is iterable object, however isn't an array
console.log(keys);
