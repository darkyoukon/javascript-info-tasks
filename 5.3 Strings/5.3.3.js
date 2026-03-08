"use strict";
console.log("The third task: Truncate the text");

// Create a function truncate(str, maxlength) that checks the length of the str,
// if it exceeds maxlength – replace the end of str with the ellipsis character
// "…", to make its length equal to maxlength.

// The result of the function should be the truncated (if needed) string.

// For instance:

console.log(truncate("What I'd like to tell on this topic is:", 20));
// == "What I'd like to te…";

console.log(truncate("Hi everyone!", 20)); // == "Hi everyone!";

function truncate(str, maxLength) {
  if (str.length < maxLength) return str;
  return str.slice(0, maxLength - 1) + "...";
}
