"use strict";
console.log("The seventh task: Is variable visible?");
// What will be the result of this code?

let x = 1;

function func() {
  console.log(x); // ?

  let x = 2;
}

func();
// P.S. There’s a pitfall in this task. The solution is not obvious.

// Probably the initialization error since 'x' is found in the 'func' LE
// however it's not defined by this moment
