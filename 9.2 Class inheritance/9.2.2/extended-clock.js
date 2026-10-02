"use strict";
import { Clock } from "./clock.js";

class ExtendedClock extends Clock {
  constructor({ template, precisionMs = 1000 }) {
    super({ template });
    this._precisionMs = precisionMs;
  }
  start() {
    if (this.timer) return;

    super.render();
    this.timer = setInterval(() => super.render(), this._precisionMs);
  }
}

let twoSecondsClock = new ExtendedClock({
  template: "h:m:s",
  precisionMs: 2000,
});
twoSecondsClock.start();
