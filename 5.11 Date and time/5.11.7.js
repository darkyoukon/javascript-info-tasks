"use strict";
console.log("The seventh task: How many seconds till tomorrow?");

// Create a function getSecondsToTomorrow() that returns the number of seconds till tomorrow.

// For instance, if now is 23:00, then:

// getSecondsToTomorrow() == 3600
// P.S. The function should work at any day, the “today” is not hardcoded.

function getSecondsToTomorrow() {
  const today = new Date();
  // tomorrow.setDate(tomorrow.getDate() + 1);
  // tomorrow.setHours(0, 0, 0, 0);
  const tomorrow = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 1,
  );
  return Math.round((tomorrow - Date.now()) / 1000);
}

console.log(getSecondsToTomorrow());
