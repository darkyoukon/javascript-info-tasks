"use strict";
alert("The sixth task: A random integer from min to max");

// Create a function randomInteger(min, max) that generates a random integer number from min to max including both min and max as possible values.

// Any number from the interval min..max must appear with the same probability.

// Examples of its work:

function NumbersHolder(min, max) {
  const numbers = {};
  for (let i = min; i <= max; ++i) {
    numbers[i] = 0;
  }
  this.appear = function (number) {
    numbers[number] += 1;
  };
  this.occurenceSum = function () {
    let sum = 0;
    for (let key in numbers) {
      sum += numbers[key];
    }
    return sum;
  };
  this.probability = function () {
    for (let key in numbers) {
      console.log(
        `Number ${key} appeared ${((numbers[key] / this.occurenceSum()) * 100).toFixed(2)}%`,
      );
    }
  };
}

function randomInteger(min, max) {
  return Math.floor((max - min + 1) * Math.random()) + min;
}

const min = 40;
const max = 50;
const numbersHolder = new NumbersHolder(min, max);
for (let i = 0; i < 10000000; ++i) {
  numbersHolder.appear(randomInteger(min, max));
}
numbersHolder.probability();
