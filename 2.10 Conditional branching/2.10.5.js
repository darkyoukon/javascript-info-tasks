// Rewrite if..else using multiple ternary operators '?'.
// For readability, it’s recommended to split the code into multiple lines.
// if (login == "Employee") {
//   message = "Hello";
// } else if (login == "Director") {
//   message = "Greetings";
// } else if (login == "") {
//   message = "No login";
// } else {
//   message = "";
// }
"use strict";
alert("The fifth task:");

let login = prompt("Enter your current job title:");
let message =
  login === "Employee"
    ? "Hello"
    : login === "Director"
      ? "Greetings"
      : login === ""
        ? "No login"
        : "";
alert(message);
