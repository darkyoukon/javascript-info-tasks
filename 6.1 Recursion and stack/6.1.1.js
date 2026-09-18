"use strict";
console.log("The first task: Sum all numbers till the given one");
// Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.

// For instance:
console.log(sumToIterative(1)); // = 1
console.log(sumToRecursive(3)); // = 3 + 2 + 1 = 6
console.log(sumToArithmeticProgression(4)); // = 4 + 3 + 2 + 1 = 10
// ...
console.log(sumToRecursive(100)); // = 100 + 99 + ... + 2 + 1 = 5050
// Make 3 solution variants:

// Using a for loop.
function sumToIterative(n) {
  let numbersSum = 0;
  for (let number = 1; number <= n; number++) {
    numbersSum += number;
  }
  return numbersSum;
}

// Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1.
function sumToRecursive(n) {
  if (n <= 1) return 1;
  else return n + sumToRecursive(n - 1);
}

// Using the arithmetic progression formula.
function sumToArithmeticProgression(n) {
  return (n * (1 + n)) / 2;
}

console.log(sumToArithmeticProgression(100)); // 5050

// P.S. Which solution variant is the fastest? The slowest? Why?
// The fastest is the arithmetic progression one since its time complexity is O(1) - 1 formulae
// The slowest is the recursive one since it uses the most memory because of the context preservation

// P.P.S. Can we use recursion to count sumTo(100000)?
// No since maximum number of the recursion depth is typically set to ~10000
// (without the "tail call" optimizations of course)

/* Iterative algorithm took: 0.295 s
   Recursive algorithm took: 0.952 s
   Arithmetic progression algorithm took: 0.002 s */
function bench({ benchIterations = 1000, finalValue = 10000, sumFunction }) {
  const startTime = performance.now();
  for (let i = 0; i < benchIterations; ++i) {
    sumFunction(finalValue);
  }
  return ((performance.now() - startTime) / 1000).toPrecision(3);
}

const finalValue = 9000;
sumToIterative(finalValue);
console.log(
  `Iterative algorithm took: ${bench({ sumFunction: sumToIterative, finalValue: finalValue })}s`,
);

sumToRecursive(finalValue);
console.log(
  `Recursive algorithm took: ${bench({ sumFunction: sumToRecursive, finalValue: finalValue })}s`,
);

sumToArithmeticProgression(finalValue);
console.log(
  `Arithmetic progression algorithm took: ${bench({ sumFunction: sumToArithmeticProgression, finalValue: finalValue })}s`,
);
