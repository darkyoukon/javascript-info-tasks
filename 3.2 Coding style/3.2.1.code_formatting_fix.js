// What’s wrong with the code style below?

// function pow(x,n)
// {
//   let result=1;
//   for(let i=0;i<n;i++) {result*=x;}
//   return result;
// }

// let x=prompt("x?",''), n=prompt("n?",'')
// if (n<=0)
// {
//   alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
// }
// else
// {
//   alert(pow(x,n))
// }

// arguments should be separated with whitespace, 
// opening curly brace should be on the same line as function name
function pow(x, n) {
    let result = 1; // assignment operator should be separated with whitespaces
    // whitespaces between each operator and statement inside for instructions,
    // opening curly brace on the same line
    for(let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}

// spaces between assignment operator, between parameters in functions,
// ";" after each statement and separate let statements, same strings format
let x = prompt("x?", "");
let n = prompt("n?", "");

// spaces between comparison operator, 
// opening curly brace and fixed characters limit per line for the alert call
if (n <= 0) {
  alert(`Power ${n} is not supported, 
    please enter an integer number greater than zero`);
} else { // formatted else statement with opening bracket on the same line
  alert( pow(x, n) ); // nested func call and parameters separated by space
}