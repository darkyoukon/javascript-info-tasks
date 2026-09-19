"use strict";
console.log("The first task: Does a function pickup latest changes?");

let name = "John";

function sayHi() {
  console.log("Hi, " + name);
}

name = "Pete";

sayHi(); // what will it show: "John" or "Pete"?
// The function sayHi uses an external variable name. When the function runs,
// which value is it going to use?

/* "Pete" will be shown since the new value is assigned later than function 
   gets actually called */

// Such situations are common both in browser and server-side development.
// A function may be scheduled to execute later than it is created,
// for instance after a user action or a network request.

// So, the question is: does it pick up the latest changes?
// Yes
