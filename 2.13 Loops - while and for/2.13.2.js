// For every loop iteration, write down which value it outputs and then compare it with the solution.
// Both loops alert the same values, or not?
alert("The second task:");

// The prefix form ++i:
let i_1 = 0;
while (++i_1 < 5) alert(i_2); // will output 1, 2, 3, 4

// The postfix form i++
let i_2 = 0;
while (i_2++ < 5) alert(i_2); // will output 1, 2, 3, 4, 5

/* condition statement takes into account postfix/prefix form of increment
because prefix returns the new value, whereas postfix form returns old one,
but condition instruction will be fully executed first and only after inner
loop alert will be called */
