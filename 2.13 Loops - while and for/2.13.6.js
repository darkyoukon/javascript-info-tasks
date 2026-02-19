// Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.

// The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.

// Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.
alert("The sixth task:");

let userNumberInput;
do {
  userNumberInput = Number(prompt("Please enter your number", ""));
} while (userNumberInput <= 100 && userNumberInput);
// } while (
//   isNaN(userNumberInput) ||
//   (userNumberInput <= 100 && userNumberInput !== "" && userNumberInput !== null)
// );
// we should manually check for NaN, !"" and !null values without converting to Number()
// in case we want to handle non-numeric input (alongside with comparison with 100)
alert("Hooray!");
