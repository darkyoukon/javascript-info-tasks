"use strict";
alert("The first task: Hello, object");
// Write the code, one line for each action:

// Create an empty object user.
const user = {};

// Add the property name with the value John.
user.name = "John";

// Add the property surname with the value Smith.
user["surname"] = "Smith";

// Change the value of the name to Pete.
user.name = "Pete";

// Remove the property name from the object.
delete user.name;

for (let key in user) {
  alert(user[key]);
}
