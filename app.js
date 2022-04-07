const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form Input");

function onLoginSubmit(event) {
  event.preventDefault();
  console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);
