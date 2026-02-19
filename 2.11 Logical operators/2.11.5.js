// What will the result be?
"use strict";
alert("The fifth task:");

alert(null || (2 && 3) || 4); // outputs: 3 (because the first comes && and it returns 3, whereas all the || operators returns the first truthy value)
