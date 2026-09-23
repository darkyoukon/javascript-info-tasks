"use strict";
console.log("The fourth task: Throttle decorator");

// Create a “throttling” decorator throttle(f, ms) – that returns a wrapper.

// When it’s called multiple times, it passes the call to f at maximum
// once per ms milliseconds.

// Compared to the debounce decorator, the behavior is completely different:
// 1) debounce runs the function once after the “cooldown” period;
// good for processing the final result.
// 2) throttle runs it not more often than given ms time;
// good for regular updates that shouldn’t be very often.

// In other words, throttle is like a secretary that accepts phone calls,
// but bothers the boss (calls the actual f)
// not more often than once per ms milliseconds.

// Let’s check the real-life application to better understand that requirement
// and to see where it comes from.

// For instance, we want to track mouse movements.
// In a browser we can setup a function to run at every mouse movement
// and get the pointer location as it moves. During an active mouse usage,
// this function usually runs very frequently, can be something like
// 100 times per second (every 10 ms). We’d like to update some information
// on the web-page when the pointer moves.

// …But updating function update() is too heavy to do it
// on every micro-movement. There is also no sense in updating more often
// than once per 100ms.

// So we’ll wrap it into the decorator: use throttle(update, 100) as
// the function to run on each mouse move instead of the original update().
// The decorator will be called often, but forward the call to update()
// at maximum once per 100ms.

// Visually, it will look like this:

// 1) for the first mouse movement the decorated variant immediately passes the
// call to update;
// that’s important, the user sees our reaction to their move immediately;
// 2) then as the mouse moves on, until 100ms nothing happens;
// the decorated variant ignores calls;
// 3) at the end of 100ms – one more update happens with the last coordinates.
// 4) then, finally, the mouse stops somewhere; the decorated variant waits
// until 100ms expire and then runs update with last coordinates;
// so, quite important, the final mouse coordinates are processed.
// A code example:

function f(a) {
  console.log(a);
}

// f1000 passes calls to f at maximum once per 1000 ms
let f1000 = throttle(f, 1000);

f1000(1); // shows 1
f1000(2); // (throttling, 1000ms not out yet)
f1000(3); // (throttling, 1000ms not out yet)

// when 1000 ms time out...
// ...outputs 3, intermediate value 2 was ignored
// P.S. Arguments and the context this passed to f1000
// should be passed to the original f.

function throttle(f, ms) {
  let throttled = false,
    savedThis,
    savedArgs;
  function wrapper(...args) {
    if (throttled) {
      savedThis = this;
      savedArgs = args;
      return;
    }

    f.apply(this, args);
    throttled = true;

    setTimeout(() => {
      throttled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }
  return wrapper;
}

// Alternative solution using recursion
// function throttle(func, ms) {
//   let timer;
//   let savedThis, savedArgs;
//   return function wrapper(...args) {
//     if (!timer) {
//       func.apply(this, args);
//       timer = setTimeout(() => {
//         timer = null;
//         if (savedArgs) {
//           const currentArgs = savedArgs;
//           const currentThis = savedThis;

//           savedArgs = savedThis = null; // Clear first, then call
//           wrapper.apply(currentThis, currentArgs);
//         }
//       }, ms);
//     } else {
//       savedThis = this;
//       savedArgs = args;
//     }
//   };
// }
