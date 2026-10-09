"use strict";
console.log("The first task: Re-resolve a promise");
// What’s the output of the code below?

let promise = new Promise(function (resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(console.log);
// 1, since all the code after resolve(...) is ignored
