"use strict";
console.log("The first task: Sum the properties");

// There is a salaries object with arbitrary number of salaries.

// Write the function sumSalaries(salaries) that returns the sum of all salaries using Object.values and the for..of loop.

// If salaries is empty, then the result must be 0.

// For instance:

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

console.log(sumSalaries(salaries)); // 650

function sumSalaries(salaries) {
  // let salariesSum = 0;
  // for (let employeeSalary of Object.values(salaries)) {
  //   salariesSum += employeeSalary;
  // }
  // return salariesSum;

  return Object.values(salaries).reduce(
    (salariesSum, currentEmployeeSalary) =>
      (salariesSum += currentEmployeeSalary),
    0,
  );
}
