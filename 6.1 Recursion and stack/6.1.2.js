"use strict";
console.log("The second task: Calculate factorial");
const RECURSION_DEPTH_LIMIT = 8000;

// The factorial of a natural number is a number multiplied by
// "number minus one", then by "number minus two",
// and so on till 1. The factorial of n is denoted as n!

// We can write a definition of factorial like this:

// n! = n * (n - 1) * (n - 2) * ...*1
// Values of factorials for different n:

// 1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120
// The task is to write a function factorial(n)
// that calculates n! using recursive calls.

console.log(calculateFactorial(5)); // 120

function factorial(number) {
  return number >= 0 ? number * factorial(number - 1) : number + 1;
}

function factorialTCO(number, accumulator = 1) {
  if (number <= 1) return accumulator;
  return factorialTCO(number - 1, accumulator * number);
}

console.log(calculateFactorial(5, factorialTCO));

function argumentIsSafe(number) {
  return Number.isInteger(number) && number >= 0;
}

function calculateFactorial(number, algorithm = factorial) {
  if (!argumentIsSafe(number)) return "Please use natural numbers!";
  if (number > RECURSION_DEPTH_LIMIT)
    return "Number is too large for a standard recursion!";
  return algorithm(number);
}

/* Recursive algorithm took: 0.420 s
   Optimised recursive algorithm took: 0.446 s */
function bench({
  benchIterations = 5000,
  finalValue = RECURSION_DEPTH_LIMIT,
  callFunction,
}) {
  // Warm-up
  for (let i = 0; i < 100; i++) {
    calculateFactorial(finalValue, callFunction);
  }

  // Benchmark
  const startTime = performance.now();
  for (let i = 0; i < benchIterations; ++i) {
    calculateFactorial(finalValue, callFunction);
  }
  return ((performance.now() - startTime) / 1000).toPrecision(3);
}

const finalValue = RECURSION_DEPTH_LIMIT;
console.log(
  `Recursive algorithm took: ${bench({ callFunction: factorial, finalValue: finalValue })} s`,
);
console.log(
  `Optimised recursive algorithm took: ${bench({ callFunction: factorialTCO, finalValue: finalValue })} s`,
);
