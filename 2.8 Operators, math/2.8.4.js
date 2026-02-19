alert("Fourth task");

// we could include unary + before each prompt function call as well
let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(a + b); // 12
alert(+a + +b); // 3
alert(Number(a) + Number(b)); // 3
