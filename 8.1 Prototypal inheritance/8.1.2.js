"use strict";
console.log("The second task: Searching algorithm");
// The task has two parts.

// Given the following objects:

let head = {
  glasses: 1,
};

let table = {
  pen: 3,
  __proto__: head,
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

let pockets = {
  money: 2000,
  __proto__: bed,
};
// Use __proto__ to assign prototypes in a way that any property lookup
// will follow the path: pockets → bed → table → head.
// For instance, pockets.pen should be 3 (found in table),
console.log(pockets.pen); // 3
// and bed.glasses should be 1 (found in head).
console.log(bed.glasses); // 1

// Answer the question: is it faster to get glasses
// as pockets.glasses or head.glasses? Benchmark if needed.
function bench({ obj, property, iterationsNumber = 10000000 }) {
  // warmup
  for (let i = 0; i < 100; ++i) {
    obj[property];
  }

  const beforeTime = Date.now();

  for (let i = 0; i < iterationsNumber; ++i) {
    obj[property];
  }

  const benchSeconds = (Date.now() - beforeTime) / 1000;
  console.log(
    `Time needed to access \
    ${JSON.stringify(obj)}[${property}]: ${benchSeconds}`,
  );
}
bench({ obj: pockets, property: "glasses" });
bench({ obj: head, property: "glasses" });
// Getting the property of the prototype seems faster than getting it from the
// inherited object, but the difference is negligible
// Time needed to access     {"money":2000}[glasses]: 0.006
// Time needed to access     {"glasses":1}[glasses]: 0.011
