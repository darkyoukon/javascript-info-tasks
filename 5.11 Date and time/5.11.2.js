"use strict";
console.log("The second task: Show a weekday");

// Write a function getWeekDay(date) to show the weekday in short format: 'MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'.

// For instance:

const weekDays = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];

let date = new Date(2012, 0, 3); // 3 Jan 2012
console.log(getWeekDay(date)); // should output "TU"

function getWeekDay(date) {
  return weekDays[date.getDay()];
}
