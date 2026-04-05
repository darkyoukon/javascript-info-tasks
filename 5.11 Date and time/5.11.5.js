"use strict";
console.log("The fifth task: Last day of month?");

// Write a function getLastDayOfMonth(year, month) that returns the last day of month. Sometimes it is 30th, 31st or even 28/29th for Feb.

// Parameters:

// year – four-digits year, for instance 2012.
// month – month, from 0 to 11.
// For instance, getLastDayOfMonth(2012, 1) = 29 (leap year, Feb).

function getLastDayOfMonth(year, month) {
  // const requestedDate = new Date(year, month + 1);
  // requestedDate.setDate(requestedDate.getDate() - 1);
  const requestedDate = new Date(year, month + 1, 0);
  return requestedDate.getDate();
}

console.log(getLastDayOfMonth(2016, 1));
