document.addEventListener("DOMContentLoaded", function () {

});

signupForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // console.log(usernameInput.value);
    // console.log(emailInput.value);
    // console.log(passwdInput.value);
    // console.log(retryPasswdInput.value);
    validateInput(usernameInput, usernameSpan, [emptyCm(usernameInput)]);
    validateInput(emailInput, emailSpan, [emptyCm(emailInput), { condition: emailInput.checkValidity() }]);
    validateInput(passwdInput, passwdSpan, [emptyCm(passwdInput), { condition: isPasswordValid(passwdInput.value), message: VALIDATION_MESSAGES.password }]);
    validateInput(retryPasswdInput, retryPasswdSpan, [emptyCm(retryPasswdInput), { condition: retryPasswdInput.value === passwdInput.value, message: VALIDATION_MESSAGES.retryPassword }]);
})
function emptyCm(domInputElement) {
    return {
        condition: domInputElement.value !== "",
        message: VALIDATION_MESSAGES.empty,
    };
}
function validateInput(domInputElement, domSpanElement, cms) {
    //check if empty

    for (const cm of cms) {
        if (!cm.condition) {
            if (cm.message !== undefined) {
                domInputElement.setCustomValidity(cm.message);
            }
            domInputElement.style.border = "1px solid red";
            domInputElement.reportValidity();

            domSpanElement.style.visibility = "visible";
            domSpanElement.innerText = domInputElement.validationMessage;
            return;
        }
    }
}

function reportAlert(domInputElement, domSpanElement, message) {
    domInputElement.style.border = "1px solid red";
    domInputElement.reportValidity();

    domSpanElement.style.visibility = "visible";
    domSpanElement.innerText = message;
}
function removeAlert(domInputElement, domSpanElement) {
    domInputElement.style.border = "1px solid #cccccc";
    domSpanElement.style.visibility = "collapse";
}

function isPasswordValid(passwdTxt) {
    var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;
    return passwdTxt.match(regex);
}