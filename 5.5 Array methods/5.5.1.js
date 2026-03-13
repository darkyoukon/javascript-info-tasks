"use strict";
console.log("The first task: Translate border-left-width to borderLeftWidth");

// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

// Examples:

console.log(camelize("background-color")); // == "backgroundColor";
console.log(camelize("list-style-image")); // == "listStyleImage";
console.log(camelize("-webkit-transition")); // == "WebkitTransition";

function camelize(str) {
  return str
    .split("-")
    .map((item, index) =>
      index > 0 ? (item = item[0].toUpperCase() + item.slice(1)) : item,
    )
    .join("");
}
