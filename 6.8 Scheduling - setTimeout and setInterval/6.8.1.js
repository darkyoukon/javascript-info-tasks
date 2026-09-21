"use strict";
console.log("The first task: Output every second");
// Write a function printNumbers(from, to) that outputs a number every second, starting from from and ending with to.
const FROM = 1;
const TO = 5;
const TIMEOUT_PERIOD = 100;

function output(number, time) {
  console.log(`Number: ${number}, time passed: ${Date.now() - time}ms`);
}

// Make two variants of the solution.
// 1. Using setInterval.
function printNumbersSetInterval(from, to) {
  console.log("setInterval printing:");
  const now = Date.now();

  output(from++, now);

  const timerId = setInterval(() => {
    output(from, now);
    ++from;
    if (from > to) clearInterval(timerId);
  }, TIMEOUT_PERIOD);
}
printNumbersSetInterval(FROM, TO);

// 2. Using nested setTimeout.
function printNumbersSetTimeout(from, to) {
  console.log("setTimeout printing:");
  const now = Date.now();

  output(from++, now);

  const timerId = setTimeout(function timeoutPrint() {
    output(from, now);
    ++from;
    if (from <= to) setTimeout(timeoutPrint, TIMEOUT_PERIOD);
  }, TIMEOUT_PERIOD);
}
setTimeout(printNumbersSetTimeout, TIMEOUT_PERIOD * (TO - FROM + 1), FROM, TO);

setTimeout(
  () => {
    const event = new CustomEvent("script1Ready");
    window.dispatchEvent(event);
  },
  2 * TIMEOUT_PERIOD * (TO - FROM + 1),
);
