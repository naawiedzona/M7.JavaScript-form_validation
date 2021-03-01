const form = document.querySelector("#form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const formParts = document.querySelectorAll(".form-control");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  var validate = false;
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (usernameValue === "") {
    setError(username, "rellena el campo nombre");
  } else if (!usernameValue.match(/[a-zA-Z]{5,}/)) {
    setError(username, "nombre de usuario debe tener min 5 caracteres");
  } else {
    setSuccess(username);
  }

  if (emailValue === "") {
    setError(email, "rellena tu email");
  } else if (
    !emailValue.match(/^[a-z-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)
  ) {
    setError(email, "email no valido");
  } else {
    setSuccess(email);
  }

  // password
  if (passwordValue === "") {
    setError(password, "rellena tu contraseña");
  } else if (
    !passwordValue.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/)
  ) {
    setError(password, "contraseña no valida");
  } else {
    setSuccess(password);
  }
  for (i = 0; i < formParts.length; i++) {
    if (formParts[i].className === "form-control error") {
      validate = true;
    }
  }
  if (!validate) {
    correctInfo();
  }
}

function setError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.innerText = message;
  formControl.className = "form-control error";
}

function setSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
function correctInfo() {
  username.value = "";
  email.value = "";
  password.value = "";
  for (let i = 0; i < formParts.length; i++) {
    formParts[i].className = "form-control";
  }
}
