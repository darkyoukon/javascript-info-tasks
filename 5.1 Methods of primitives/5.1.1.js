"use strict";
alert("The first task: Can I add a string property?");
// Consider the following code:
// What do you think, will it work? What will be shown?

let str = "Hello";

str.test = 5; // an error will be displayed since primitives aren't objects, nor object wrappers by itself
// ACTUALLY there's a difference between non-strict and strict mode
// non-strict creates wrapper after creating property for a primitive
// strict mode forbids such a behaviour

alert(str.test);
