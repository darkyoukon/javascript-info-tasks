"use strict";
console.log("The first task: Rewrite to class");
// The Clock class (see the sandbox) is written in functional style.
// Rewrite it in the “class” syntax.

// P.S. The clock ticks in the console, open it to see.
// function Clock({ template }) {
//   let timer;

//   function render() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = "0" + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = "0" + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = "0" + secs;

//     let output = template
//       .replace("h", hours)
//       .replace("m", mins)
//       .replace("s", secs);

//     console.log(output);
//   }

//   this.stop = function () {
//     clearInterval(timer);
//   };

//   this.start = function () {
//     render();
//     timer = setInterval(render, 1000);
//   };
// }

// A solution to preserve old structure
// class Clock {
//   constructor({ template }) {
//     let timer;

//     function render() {
//       const date = new Date();

//       let hours = date.getHours();
//       if (hours < 10) hours = "0" + hours;

//       let mins = date.getMinutes();
//       if (mins < 10) mins = "0" + mins;

//       let secs = date.getSeconds();
//       if (secs < 10) secs = "0" + secs;

//       const output = template
//         .replace("h", hours)
//         .replace("m", mins)
//         .replace("s", secs);

//       console.log(output);
//     }

//     this.stop = function () {
//       clearInterval(timer);
//     };

//     this.start = function () {
//       render(template);
//       timer = setInterval(render, 1000, template);
//     };
//   }
// }

// More modern/readable way
class Clock {
  constructor({ template }) {
    this._template = template;
    this._timer = null;
  }

  render() {
    const date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    const output = this._template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    console.log(output);
  }

  // start() and stop() could be as function properties since they logically
  // should be shown as instances of the object, but in this case memory
  // will be filled faster
  stop() {
    if (!this._timer) return;

    clearInterval(this._timer);
    this._timer = null;
  }

  start() {
    if (this._timer) return;

    this.render();
    this._timer = setInterval(() => this.render(), 1000);
  }
}

const clock = new Clock({ template: "h:m:s" });
clock.start();
