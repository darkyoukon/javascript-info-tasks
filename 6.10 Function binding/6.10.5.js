"use strict";
console.log("The fifth task: Partial application for login");

// The task is a little more complex variant of Fix a function that loses "this".

// The user object was modified. Now instead of two functions loginOk/loginFail,
// it has a single function user.login(true/false).

// What should we pass askPassword in the code below,
// so that it calls user.login(true) as ok and user.login(false) as fail?

function askPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: "John",

  login(result) {
    console.log(this.name + (result ? " logged in" : " failed to log in"));
  },
};

askPassword(user.login.bind(user, true), user.login.bind(user, false));
