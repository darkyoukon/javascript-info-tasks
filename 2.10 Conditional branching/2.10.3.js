// Using if..else, write the code which gets a number via prompt and then shows in alert:

// 1, if the value is greater than zero,
// -1, if less than zero,
// 0, if equals zero.
// In this task we assume that the input is always a number.
alert("The third task:");

const promptedNumber = Number(prompt("Enter a desired Number value: "));
if (promptedNumber > 0) {
  alert(1);
} else if (promptedNumber < 0) {
  alert(-1);
} else if (promptedNumber === 0) {
  // explicit condition used for this case since else without condition could process NaN cases as well, yet we don't actually need that
  // undefined case is skipped
  alert(0);
}
