"use strict";
console.log("The sixth task: How many seconds have passed today?");

// Write a function getSecondsToday() that returns the number of seconds from the beginning of today.

// For instance, if now were 10:00 am, and there was no daylight savings shift, then:

// getSecondsToday() == 36000 // (3600 * 10)
// The function should work in any day. That is, it should not have a hard-coded value of “today”.

function getSecondsToday() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return Math.round((Date.now() - today.getTime()) / 1000);
}

console.log(getSecondsToday());
