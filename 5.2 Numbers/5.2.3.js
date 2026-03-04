"use strict";
alert("The third task: Repeat until the input is a number");

// Create a function readNumber which prompts for a number until the visitor
// enters a valid numeric value.
// The resulting value must be returned as a number.
// The visitor can also stop the process by entering an empty line or pressing
// “CANCEL”. In that case, the function should return null.

function readNumber() {
  let inputNumericValue;
  do {
    inputNumericValue = prompt("Please enter a valid numeric value", "");
  } while (!isFinite(inputNumericValue));
  // null || "" converts to 0 || "Number" is OK
  // NaN/Infinities should be checked
  return inputNumericValue ? Number(inputNumericValue) : null; // since "0" is truthy value
}

readNumber();
