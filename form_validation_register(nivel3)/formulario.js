// las partes del documento

const form = document.querySelector("#form");
const email = document.querySelector("#email");
const city = document.querySelector("#city");
//const username = document.querySelector("#username");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");
//const labelName = document.querySelector("#labelName");
const labelEmail = document.querySelector("#labelEmail");
const labelCity = document.querySelector("#labelCity");
const formParts = document.querySelectorAll(".form-control");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  var validate = false;
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const cityValue = city.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();
  const provinceValue = province.value;
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
  } else if (
    !passwordValue.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/)
  ) {
    setError(password, "contraseña no valida");
  } else {
    setSuccess(password);
  }

  // password 2
  if (password2Value === "") {
    setError(password2, "rellena tu 2 contraseña");
  } else if (passwordValue !== password2Value) {
    setError(password2, "las contraseñas no iguales");
  } else {
    setSuccess(password2);
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
  document.querySelector(".info").style.display = "block";
  document.querySelector(".message").innerHTML = `<div id="text">
  <h2>La cuenta ha sido creada</h2>
  <p>${labelName.innerText}:${username.value}</p>
  <p>${labelEmail.innerText}:${email.value}</p>
  <p>${labelCity.innerText}:${city.value}</p>
  <p>${provinceLabel.innerText}:${province.value}</p>
  </div>`;
}
document.querySelector("#closeIcon").onclick = closeWindow;

function closeWindow() {
  document.querySelector(".info").style.display = "none";
  username.value = "";
  email.value = "";
  city.value = "";
  password.value = "";
  password2.value = "";
  province.value = "Barcelona";
}
