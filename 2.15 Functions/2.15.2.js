// The following function returns true if the parameter age is greater than 18.

// Otherwise it asks for a confirmation and returns its result.
"use strict";

alert("The second task:");

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm("Did parents allow you?");
  }
}
// Rewrite it, to perform the same, but without if, in a single line.

// Make two variants of checkAge:

// Using a question mark operator ?
// Using OR ||

function checkAgeTernary(age) {
  return age > 18 ? true : confirm("Did parents allow you?");
}

// For this case we might use logical or instead of nullish coalescing
// because all falsy value shouldn't met the first condition anyways
function checkAgeLogicalOr(age) {
  return age > 18 || confirm("Did parents allow you?");
}

const currentUserAge = Number(prompt("Please enter your age: ", ""));
alert(checkAgeTernary(currentUserAge));
alert(checkAgeLogicalOr(currentUserAge));
