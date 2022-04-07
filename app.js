const loginInput = document.querySelector("#login-form Input");
const loginButton = document.querySelector("#login-form Button");

function onLoginBtnClick() {
  console.dir(loginInput.value);
}

loginButton.addEventListener("click", onLoginBtnClick);
