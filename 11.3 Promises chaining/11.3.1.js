"use strict";
console.log("The first task: Promise: then versus catch");
// Are these code fragments equal?
// In other words, do they behave the same way in any circumstances,
// for any handler functions?

promise.then(f1).catch(f2);

// Versus:
promise.then(f1, f2);

// promise.then(f1, f2) catches only errors happened
// during promise processing stage, but not during f1
// whereas promise.then(f1).catch(f2) could catch errors on both stages
