"use strict";
console.log("The third task: Fibonacci numbers");
const RECURSION_DEPTH_LIMIT = 8000;

// The sequence of Fibonacci numbers has the formula Fn = Fn-1 + Fn-2. In other words, the next number is a sum of the two preceding ones.
// First two numbers are 1, then 2(1+1), then 3(1+2), 5(2+3) and so on: 1, 1, 2, 3, 5, 8, 13, 21....
// Fibonacci numbers are related to the Golden ratio and many natural phenomena around us.
// Write a function fib(n) that returns the n-th Fibonacci number.

// An example of work:
function fibRecursive(n, memo = {}) {
  if (n <= 2) return 1;
  return (memo[n] ??= fibRecursive(n - 1, memo) + fibRecursive(n - 2, memo));
  // return fibRecursive(n-1) + fibRecursive(n-2); // O(2^n) since each nested call multiplies recursion 2x
}

function fibRecursiveOptimized(n, previous = 0, accumulator = 1) {
  if (n <= 1) return accumulator;
  return fibRecursiveOptimized(n - 1, accumulator, accumulator + previous); // O(n)
}

function fibIterative(n) {
  let resultNumber = 1,
    previousNumber = 1;
  for (let i = 2; i < n; ++i) {
    [previousNumber, resultNumber] = [
      resultNumber,
      resultNumber + previousNumber,
    ];
    // resultNumber += previousNumber;
    // previousNumber = resultNumber - previousNumber;
    // console.log(previousNumber, resultNumber);
  }
  return resultNumber; // O(n)
}

console.log(calculateFibonacci(3)); // 2
console.log(calculateFibonacci(7, fibIterative)); // 13
console.log(calculateFibonacci(77, fibRecursiveOptimized)); // 5527939700884757
// P.S. The function should be fast. The call to fib(77) should take no more than a fraction of a second.

function argumentIsSafe(number) {
  return Number.isInteger(number) && number >= 1;
}

function calculateFibonacci(number, algorithm = fibRecursive) {
  if (!argumentIsSafe(number)) return "Please use natural numbers!";
  if (number > RECURSION_DEPTH_LIMIT)
    return "Number is too large for a standard recursion!";
  return algorithm(number);
}

/* Iterative algorithm took: 0.00330s
   Recursive algorithm took: 0.00990s
   Optimised recursive algorithm took: 0.000900s */
function bench({
  benchIterations = 1000,
  finalValue = RECURSION_DEPTH_LIMIT,
  callFunction,
}) {
  // Warm-up
  for (let i = 0; i < 100; i++) {
    callFunction(finalValue);
  }

  // Benchmark
  const startTime = performance.now();
  for (let i = 0; i < benchIterations; ++i) {
    callFunction(finalValue);
  }
  return ((performance.now() - startTime) / 1000).toPrecision(3);
}

const finalValue = 75;
console.log(
  `Iterative algorithm took: ${bench({ callFunction: fibIterative, finalValue: finalValue })}s`,
);
console.log(
  `Recursive algorithm took: ${bench({ callFunction: fibRecursive, finalValue: finalValue })}s`,
);
console.log(
  `Optimised recursive algorithm took: ${bench({ callFunction: fibRecursiveOptimized, finalValue: finalValue })}s`,
);
