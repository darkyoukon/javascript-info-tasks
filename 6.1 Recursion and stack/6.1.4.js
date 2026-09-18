"use strict";
console.log("The fourth task: Output a single-linked list");
// Let’s say we have a single-linked list (as described in the chapter Recursion and stack):

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

// Write a function printList(list) that outputs list items one-by-one.
function printListIterative(list) {
  let listCopy = list;

  console.log("List values (iterative): ");
  do {
    console.log(listCopy.value);
  } while ((listCopy = listCopy.next));
}
printListIterative(list);

// Make two variants of the solution: using a loop and using recursion.
function printListRecursive(list) {
  if (!list || typeof list !== "object") return;
  console.log("List values (recursive): ");
  function recursion(list) {
    console.log(list.value);
    if (list.next) recursion(list.next);
  }
  recursion(list);
}
printListRecursive(list);

console.log(list);

// What’s better: with recursion or without it?
// Recursive method is shorter, but iterative should work faster
