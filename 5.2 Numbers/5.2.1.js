"use strict";
alert("The first task: Sum numbers from the visitor");
// Create a script that prompts the visitor to enter two numbers and then shows their sum.
// P.S. There is a gotcha with types.

function VisitorsNumberAdder() {
  this.numPrompt = function () {
    while (!isFinite(this.firstNumber)) {
      this.firstNumber = Number(prompt("Please enter the first number:", 0));
    }
    while (!isFinite(this.secondNumber)) {
      this.secondNumber = Number(prompt("Please enter the second number:", 0));
    }
  };
  this.numbsAddition = function () {
    this.numbersSum = this.firstNumber + this.secondNumber;
  };
  this[Symbol.toPrimitive] = function () {
    return this.numbersSum;
  };
}

const desiredSumObj = new VisitorsNumberAdder();
desiredSumObj.numPrompt();
desiredSumObj.numbsAddition();
alert(desiredSumObj);
