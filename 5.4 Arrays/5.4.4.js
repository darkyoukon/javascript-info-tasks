"use strict";
console.log("The fourth task: Sum input numbers");

// Write the function sumInput() that:

// Asks the user for values using prompt and stores the values in the array.
// Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
// Calculates and returns the sum of array items.
// P.S. A zero 0 is a valid number, please don’t stop the input on zero.

function sumInput() {
  const userInputValues = [];
  let currentInput;
  while (
    (currentInput = prompt("Please enter numeric value", "")) &&
    isFinite(currentInput)
  ) {
    userInputValues.push(Number(currentInput));
  }

  let sumValues = 0;
  for (let curValue of userInputValues) {
    sumValues += curValue;
  }

  return sumValues;
}

console.log(`The sum of all the input values = ${sumInput()}`);
