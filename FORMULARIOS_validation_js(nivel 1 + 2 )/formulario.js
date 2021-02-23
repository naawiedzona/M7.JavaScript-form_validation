//  regex
/* 
 var regexUser= /^[a-z-Z0-9\_\-]{5,25}/;
var regexEmail=/^[a-z-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
var regexPassword=/[a-zA-Z+\d+.]{8,}/;
var regexCity=/[a-zA-Z]{3,40}/;  */

// las partes del documento

const form = document.querySelector("#form");
const email = document.querySelector("#email");
const city = document.querySelector("#city");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const cityValue = city.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();
  // username
  if (usernameValue === "") {
    setError(username, "rellena el campo nombre");
  } else if (!usernameValue.match(/[a-zA-Z]{5,}/)) {
    setError(username, "nombre de usuario debe tener min 5 caracteres");
  } else {
    setSuccess(username);
  }

  // email
  if (emailValue === "") {
    setError(email, "rellena tu email");
  } else if (
    !emailValue.match(/^[a-z-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)
  ) {
    setError(email, "email no valido");
  } else {
    setSuccess(email);
  }

  // city
  if (cityValue === "") {
    setError(city, "rellena tu ciudad");
  } else if (!cityValue.match(/[a-zA-Z]{3,}/)) {
    setError(city, "rellena el campo ciudad correctamente");
  } else {
    setSuccess(city);
  }

  // password
  if (passwordValue === "") {
    setError(password, "rellena tu contraseña");
  } else if (!passwordValue.match(/^[a-z-Z0-9\_\-]{5,25}/)) {
    setError(password, "contraseña no valida");
  } else {
    setSuccess(password);
  }

  // password 2
  if (password2Value === "") {
    setError(password2, "rellena tu 2 contraseña");
  } else if (passwordValue !== password2Value) {
    setError(password2, "contraseña no es igual");
  } else {
    setSuccess(password2);
  }
}
// en el caso de rellenar mal
function setError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.innerText = message;
  formControl.className = "form-control error";
}
// en el caso de rellenar bien
function setSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
