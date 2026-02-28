"use strict";
alert("The third task: Create new Accumulator");

// Create a constructor function Accumulator(startingValue).

// Object that it creates should:

// Store the “current value” in the property value. The starting value is set to the argument of the constructor startingValue.
// The read() method should use prompt to read a new number and add it to value.
// In other words, the value property is the sum of all user-entered values with the initial value startingValue.

// Here’s the demo of the code:

function Accumulator(startingValue) {
  this.value = startingValue ?? 0;
  this.read = function () {
    const inputValue = Number(prompt("Enter the desired value:", 0));
    this.value += !isNaN(inputValue) ? inputValue : 0;
  };
}

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum of these values
