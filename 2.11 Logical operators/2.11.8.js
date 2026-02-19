// Which of these alerts are going to execute?

// What will the results of the expressions be inside if(...)?
alert("The eighth task:");

if (-1 || 0) alert("first"); // will be executed
if (-1 && 0) alert("second"); // won't be executed
if (null || (-1 && 1)) alert("third"); // will be executed
