"use strict";
console.log("The second task: The maximal salary");

// There is a salaries object:

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};
// Create the function topSalary(salaries) that returns the name of the top-paid person.

// If salaries is empty, it should return null.
// If there are multiple top-paid persons, return any of them.
// P.S. Use Object.entries and destructuring to iterate over key/value pairs.

function topSalary(salaries) {
  if (!salaries) return null;
  let highestSalaryEmployee;
  for (const [employeeName, employeeSalary] of Object.entries(salaries)) {
    if (
      !highestSalaryEmployee ||
      highestSalaryEmployee.employeeSalary < employeeSalary
    )
      highestSalaryEmployee = { employeeName, employeeSalary };
  }
  return highestSalaryEmployee.employeeName;

  // return Object.entries(salaries).reduce(
  //   (highestSalaryEmployee, currentEmployee) =>
  //     currentEmployee[1] > highestSalaryEmployee[1]
  //       ? currentEmployee
  //       : highestSalaryEmployee,
  // )[0];
}

console.log(topSalary(salaries));
