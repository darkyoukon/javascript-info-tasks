"use strict";
console.log("The fourth task: Which day of month was many days ago?");

// Create a function getDateAgo(date, days) to return the day of month days ago from the date.

// For instance, if today is 20th, then getDateAgo(new Date(), 1) should be 19th and getDateAgo(new Date(), 2) should be 18th.

// Should work reliably for days=365 or more:

let date = new Date(2015, 0, 2);

console.log(getDateAgo(date, 1)); // 1, (1 Jan 2015)
console.log(getDateAgo(date, 2)); // 31, (31 Dec 2014)
console.log(getDateAgo(date, 365)); // 2, (2 Jan 2014)
// P.S. The function should not modify the given date.

function getDateAgo(date, days) {
  const dateAgo = new Date(date);
  dateAgo.setDate(date.getDate() - days);
  return dateAgo.getDate();
  // return new Date(date.getTime() - days * 24 * 60 * 60 * 1000).getDate();
}
