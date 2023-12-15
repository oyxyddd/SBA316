//cache the elements
const loginForm = document.getElementById("login");
const email = regForm.elements["email"];
const password = regForm.elements["password"];

// Add evnt Listener
regForm.addEventListener("submit", vaidateRegForm);


//functions for validation the login information
function vaidateRegForm(evt) {
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
}