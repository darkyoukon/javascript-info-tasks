"use strict";
// The third task: Animated circle with promise
// Rewrite the showCircle function in the solution of the task Animated circle
// with callback so that it returns a promise instead of accepting a callback.

// The new usage:

// showCircle(150, 150, 100).then((div) => {
//   div.classList.add("message-ball");
//   div.append("Hello, world!");
// });

// Animated circle
function showCircle(cx, cy, radius) {
  const circle = document.getElementsByClassName("circle")[0];
  circle.style.top = cx + "px";
  circle.style.left = cy + "px";
  circle.style.width = 2 * radius + "px";
  circle.style.height = 2 * radius + "px";
}

// Animated circle with callback
function showCircleCallback(cx, cy, radius, callback) {
  const circle = document.createElement("div");
  circle.classList.add("circle");
  circleAnimate2.parentNode.insertBefore(circle, circleAnimate2.nextSibling);
  circle.style.width = 0;
  circle.style.height = 0;
  circle.style.top = cx + "px";
  circle.style.left = cy + "px";
  setTimeout(() => {
    circle.style.width = 2 * radius + "px";
    circle.style.height = 2 * radius + "px";
    circle.addEventListener("transitionend", function handler() {
      // if (!circle.classList.contains("message-ball")) callback(circle);
      circle.removeEventListener("transitionend", handler);
      callback(circle);
    });
  }, 0);
}

// Animated circle with promise
function showCirclePromise(cx, cy, radius) {
  const circle = document.createElement("div");
  circle.classList.add("circle");
  circleAnimate3.parentNode.insertBefore(circle, circleAnimate3.nextSibling);
  circle.style.width = 0;
  circle.style.height = 0;
  circle.style.top = cx + "px";
  circle.style.left = cy + "px";

  return new Promise((resolve) => {
    setTimeout(() => {
      circle.style.width = 2 * radius + "px";
      circle.style.height = 2 * radius + "px";
      circle.addEventListener("transitionend", function handler() {
        // if (!circle.classList.contains("message-ball")) callback(circle);
        circle.removeEventListener("transitionend", handler);
        resolve(circle);
      });
    }, 0);
  });
}
