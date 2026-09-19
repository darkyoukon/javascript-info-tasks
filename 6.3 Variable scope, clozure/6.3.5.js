"use strict";
console.log("The fifth task: Function in if");
// Look at the code. What will be the result of the call at the last line?

let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    console.log(`${phrase}, ${user}`);
  }
}

sayHi(); // Function isn't defined (since it's defined inside the 'if' block scope)
