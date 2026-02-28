"use strict";
alert("The second task: Create a calculator");
// Create an object calculator with three methods:

// read() prompts for two values and saves them as object properties with names a and b respectively.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.

let calculator = {
  read() {
    this.a = Number(prompt("Please enter the first Number value:", 0));
    this.b = Number(prompt("Please enter the second Number value:", 0));
  },
  sum: function () {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
