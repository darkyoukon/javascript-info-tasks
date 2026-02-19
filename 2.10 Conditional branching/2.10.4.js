// Rewrite this if using the conditional operator '?':
// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }
alert("The fourth task:");

let a = Number(prompt("Enter the first number"));
let b = Number(prompt("Enter the second number"));
let result = a + b < 4 ? "Below" : "Over";

alert(result);
