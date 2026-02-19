// For each loop write down which values it is going to show. Then compare with the answer.
// Both loops alert same values or not?
alert("The third task:");

// The postfix form:
for (let i = 0; i < 5; i++) alert(i); // 0, 1, 2, 3, 4

// The prefix form:
for (let i = 0; i < 5; ++i) alert(i); // 0, 1, 2, 3, 4

// The same values will be returned since a typical for loop utilizes the first instruction in parenthesis
// for the first iteration of the script and performs the third instruction on the next runs, which is considered
// as a separate statement before the inner loop content
