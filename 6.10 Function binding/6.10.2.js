"use strict";
console.log("The second task: Second bind");
// Can we change this by additional binding?

// What will be the output?

function f() {
  console.log(this.name);
}

f = f.bind({ name: "John" }).bind({ name: "Ann" });

f();

// I guess we can and the output will be "Ann"
// Turns out function cannot be re-bound and the output will be "John"
