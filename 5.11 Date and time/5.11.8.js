"use strict";
console.log("The eight task: Format the relative date");

// Write a function formatDate(date) that should format date as follows:

// If since date passed less than 1 second, then "right now".
// Otherwise, if since date passed less than 1 minute, then "n sec. ago".
// Otherwise, if less than an hour, then "m min. ago".
// Otherwise, the full date in the format "DD.MM.YY HH:mm". That is: "day.month.year hours:minutes", all in 2-digit format, e.g. 31.12.16 10:00.
// For instance:

console.log(formatDate(new Date(new Date() - 1))); // "right now"

console.log(formatDate(new Date(new Date() - 30 * 1000))); // "30 sec. ago"

console.log(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 min. ago"

// yesterday's date like 31.12.16 20:00
console.log(formatDate(new Date(new Date() - 86400 * 1000)));

function get2DigitDate(number) {
  return ("0" + number).slice(-2);
}

function formatDate(date) {
  const differenceSeconds = Math.round((Date.now() - date) / 1000);
  if (differenceSeconds < 1) return "right now";
  if (differenceSeconds / 60 < 1) return `${differenceSeconds} sec. ago`;
  if (differenceSeconds / 60 / 60 < 1) {
    return `${differenceSeconds / 60} min. ago`;
  }
  return `${get2DigitDate(date.getDate())}.\
${get2DigitDate(date.getMonth() + 1)}.\
${get2DigitDate(date.getFullYear())} \
${get2DigitDate(date.getHours())}:${get2DigitDate(date.getMinutes())}`;
}
