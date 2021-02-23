// las pate3s del documento
const form = document.querySelector("#form");
const search = document.querySelector("#search");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInput();
});

function checkInput() {
  const searchValue = search.value.trim();

  if (searchValue === "") {
    setError(search, "para buscar tienes que introducir algo");
  } else if (!searchValue.match(/[a-zA-Z]{3,}/)) {
    setError(search, "nombre de usuario debe tener min 3 caracteres");
  } else {
    setSuccess(search);
  }
}
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
