'use strict'

class AuthCheckLogin {
  get rules() {
    return {
      email: "required|email",
    };
  }
  get messages() {
    return {
      "email.required": "You must provide a email address.",
      "email.email": "You must provide a valid email address.",
    };
  }
}

module.exports = AuthCheckLogin
