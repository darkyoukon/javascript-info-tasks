// What is the last value alerted by this code? Why?
alert("The first task:");

let i = 3;

while (i) {
  alert(i--);
}

// The last value would be 1 since 0 is falsy value, in this case loop condition converts Number to Boolean
