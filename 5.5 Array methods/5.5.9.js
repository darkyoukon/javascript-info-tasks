"use strict";
console.log("The nineth task: Sort users by age");

// Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

// For instance:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [pete, john, mary];

sortByAge(arr);

// now: [john, mary, pete]
console.log(arr[0].name); // John
console.log(arr[1].name); // Mary
console.log(arr[2].name); // Pete

function sortByAge(arr) {
  arr.sort((obj2, obj1) => obj2.age - obj1.age);
}
