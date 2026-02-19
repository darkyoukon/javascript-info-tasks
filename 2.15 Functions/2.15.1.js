// The following function returns true if the parameter age is greater than 18.

// Otherwise it asks for a confirmation and returns its result:
"use strict";

alert("The first task:");

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // it's not required since all falsy values won't satisfy the first condition
  // else {
  return confirm("Did parents allow you?");
  // }
}

const currentUserAge = Number(prompt("Please enter your age: ", ""));
alert(checkAge(currentUserAge));
