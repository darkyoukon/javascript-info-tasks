"use strict";
console.log("The fifth task: Output a single-linked list in the reverse order");
// Output a single-linked list from the previous task "Output a single-linked list" in the reverse order.
// Make two solutions: using a loop and using a recursion.
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

function reversePrintListIterative(list) {
  let listCopy = list;
  // let outputString = "";
  // do {
  //   outputString = listCopy.value + "\n" + outputString;
  // } while ((listCopy = listCopy.next));
  // console.log(outputString);
  console.log("List values (iterative): ");
  const values = [];
  do {
    values.push(listCopy.value);
  } while ((listCopy = listCopy.next));
  for (let i = values.length - 1; i >= 0; --i) {
    console.log(values[i]);
  }
}
reversePrintListIterative(list);

// Make two variants of the solution: using a loop and using recursion.
function reversePrintListRecursive(list) {
  if (!list || typeof list !== "object") return;
  console.log("List values (recursive): ");
  function recursion(list) {
    if (list.next) recursion(list.next);
    console.log(list.value);
  }
  recursion(list);
}
reversePrintListRecursive(list);

console.log(list);

// What’s better: with recursion or without it?
// Recursive method is shorter, but iterative should work faster
