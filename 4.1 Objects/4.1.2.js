"use strict";
alert("The second task: Check for emptiness");
// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

// Should work like that:

let schedule = {};

alert(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

alert(isEmpty(schedule)); // false

function isEmpty(obj) {
  for (let key in obj) return false; // in case there is at least 1 property
  return true;
}
