"use strict";
console.log("The first task: Is array copied?");

// What is this code going to show?

let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
console.log(fruits.length); // 4,
// since fruits and shoppingCart vars are actually references
// to the same array (object-like structure)
console.log(fruits.toString()); // "Apples,Pear,Orange,Banana"
