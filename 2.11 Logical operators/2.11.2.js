// What will the code below output ?
"use strict";
alert("The second task:");

alert(alert(1) || 2 || alert(3)); // outputs: 1 -> 2 (because the first function call returns undefined, but the second value truthy)
