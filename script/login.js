//cache the elements
const loginForm = document.getElementById("login");
const email = loginForm.elements["email"];
const password = loginForm.elements["password"];

// Add evnt Listener
loginForm.addEventListener("submit", vaidateLoginForm);


//functions for validation the login information
function vaidateLoginForm(evt) {
  const pwVal = validatePassword();
  if (pwVal === false) {
    evt.returnValue = false;
    return false;
  }
    return true;
}
function validatePassword() {
  if (password.value.length < 10) {
    alert("Passwords must be at least 10 characters long.");
    password.focus();
    return false;
  }
  const pwReg1 = /^(?=.*[a-z])(?=.*[A-Z])/;
  if (!pwReg1.test(password.value)) {
    alert(
      "Passwords must have at least one uppercase and one lowercase letter."
    );
    password.focus();
    return false;
  }
  const pwReg2 = /\d/;
  if (!pwReg2.test(password.value)) {
    alert("Passwords must contain at least one number.");
    password.focus();
    return false;
  }

  return password.value;
}