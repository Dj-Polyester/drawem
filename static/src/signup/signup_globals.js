
const signupForm = document.forms["signup-form"]


signupForm.querySelectorAll("div");

const signupBtn = signupForm["signup-btn"];
const usernameInput = signupForm["username-input"];
const emailInput = signupForm["email-input"];
const passwdInput = signupForm["password-input"];
const retryPasswdInput = signupForm["retry-password-input"];

const usernameSpan = document.getElementById("username-span");
const emailSpan = document.getElementById("email-span");
const passwdSpan = document.getElementById("password-span");
const retryPasswdSpan = document.getElementById("retry-password-span");

const invalidcredentials = document.getElementsByClassName("invalid-credentials");

const VALIDATION_MESSAGES = {
    empty: "This field cannot be empty",
    retryPassword: "This field does not match the password",
    password: "The password has to abide by the rules below",
}