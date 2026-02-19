// What will be the result for these expressions?
"use strict";
alert(5 > 4); // true
alert("apple" > "pineapple"); // false
alert("2" > "12"); // true, unicode order, because both of operands share the same string type
alert(undefined == null); // true
alert(undefined === null); // false
alert(null == "\n0\n"); // false
alert(null === +"\n0\n"); // false
