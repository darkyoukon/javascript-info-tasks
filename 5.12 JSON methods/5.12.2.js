"use strict";
console.log("The second task: Exclude backreferences");

// In simple cases of circular references, we can exclude an offending property
// from serialization by its name.

// But sometimes we can’t just use the name, as it may be used both in circular
// references and normal properties. So we can check the property by its value.

// Write replacer function to stringify everything, but remove properties that
// reference meetup:

let room = {
  number: 23,
};

let meetup = {
  title: "Conference",
  occupiedBy: [{ name: "John" }, { name: "Alice" }],
  place: room,
};

// circular references
room.occupiedBy = meetup;
meetup.self = meetup;

console.log(
  JSON.stringify(meetup, (key, value) =>
    value !== meetup || key === "" ? value : undefined,
  ),
);
// console.log(safeStringify(meetup));

// function safeStringify(object) {
//   const seenObjects = new WeakSet();
//   return JSON.stringify(object, function replacer(_, value) {
//     if (typeof value !== "object" || value === null) return value;
//     if (seenObjects.has(value)) return "[Circular]";
//     seenObjects.add(value);
//     return value;
//   });
// }

/* result should be:
{
  "title":"Conference",
  "occupiedBy":[{"name":"John"},{"name":"Alice"}],
  "place":{"number":23}
}
*/
