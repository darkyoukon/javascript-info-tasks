"use strict";
console.log('The first task: Changing "prototype"');
// In the code below we create new Rabbit, and then try to modify its prototype.

// In the start, we have this code:
function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit = new Rabbit();

console.log(rabbit.eats); // true

// We added one more string (emphasized). What will console.log show now?
function Rabbit2() {}
Rabbit2.prototype = {
  eats: true,
};

let rabbit2 = new Rabbit2();

Rabbit2.prototype = {};

console.log(rabbit2.eats); // true since object was already created

// …And if the code is like this (replaced one line)?
function Rabbit3() {}
Rabbit3.prototype = {
  eats: true,
};

let rabbit3 = new Rabbit3();

Rabbit3.prototype.eats = false;

console.log(rabbit3.eats); // false
// since we changed the property of the [[Prototype]] object itself

// And like this (replaced one line)?
function Rabbit4() {}
Rabbit4.prototype = {
  eats: true,
};

let rabbit4 = new Rabbit4();

delete rabbit4.eats;

console.log(rabbit4.eats); // true
// since prototypal search works only for read operations

// The last variant:
function Rabbit5() {}
Rabbit5.prototype = {
  eats: true,
};

let rabbit5 = new Rabbit5();

delete Rabbit5.prototype.eats;

console.log(rabbit5.eats); // 'undefined' since we deleted the property
// from the [[Prototype]] itself
