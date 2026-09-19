"use strict";
console.log("The second task: Which variables are available?");
// The function makeWorker below makes another function and returns it.
// That new function can be called from somewhere else.

// Will it have access to the outer variables from its creation place,
// or the invocation place, or both?

function makeWorker() {
  let name = "Pete";

  return function () {
    console.log(name);
  };
}

let name = "John";

// create a function
let work = makeWorker();

// call it
work(); // what will it show?
// Which value it will show? “Pete” or “John”?

// It will show "Pete"
// since it finds this variable in the LE of the outer function "makeWorker"
