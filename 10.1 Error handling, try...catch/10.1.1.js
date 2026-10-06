"use strict";
console.log("The first task: Finally or just the code?");
// Compare the two code fragments.

// The first one uses finally to execute the code after try...catch:

try {
  work work
} catch (err) {
  handle errors
} finally {
  cleanup the working space
}

// The second fragment puts the cleaning right after try...catch:
try {
  work work
} catch (err) {
  handle errors
}

cleanup the working space

// We definitely need the cleanup after the work,
// doesn’t matter if there was an error or not.

// Is there an advantage here in using finally or both code fragments are equal?
// If there is such an advantage, then give an example when it matters.

// statements declared outside of the 'finally' block won't be called in case
// there're statements that end execution of current function/block scope
// (like return/throw as well as break/continue) in the try/catch blocks
// plus it's more readable