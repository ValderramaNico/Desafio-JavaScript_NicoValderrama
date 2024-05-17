// inputs

const caseForm = document.getElementById("formulario");
const nameInput = document.getElementById("nombre");
const caseInput = document.getElementById("asunto");
const messageInput = document.getElementById("mensaje");

// elementos 'p' para mostrar errores

const errorName = document.getElementById("errorNombre");
const errorCase = document.getElementById("errorAsunto");
const errorMessage = document.getElementById("errorMensaje");


// elemento 'div' para mostrar el resultado exitoso de envío

const messageSent = document.getElementById("resultado");

// regex

const regexInputs = /^[a-zA-Z \.ñÑáéíóúÁÉÍÓÚ]+$/;

// form

// evento listeners

// caseForm.addEventListener("submit", registerValidator)
// function registerValidator(event){}

caseForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let name = nameInput.value;                                  // n = "pepito" 
    let caseBox = caseInput.value;
    let message = messageInput.value;
    registerValidator(name, caseBox, message);                   // registerValidator("pepito", ...)
});

// DECLARACIÓN DE FUNCIÓN
// function registerValidator() {}
// INVOCACIÓN DE FUNCIÓN
// registerValidator()
function registerValidator(name, caseBox, message) {          // Se envía pepito a 'name'
    const isNameValid = regexInputs.test(name);
    const isCaseValid = regexInputs.test(caseBox);
    const isMessageValid = regexInputs.test(message);

    clearErrors();

    if (!isNameValid) {
      errorName.innerHTML = "Nombre tiene un carácter no valido";
    }

    if (!isCaseValid) {
      errorCase.innerHTML = "Asunto tiene un carácter no valido";
    }

    if (!isMessageValid) {
      errorMessage.innerHTML = "Existe un carácter no valido en el mensaje";
    }

    if (isNameValid && isCaseValid && isMessageValid) {
        messageSent.innerHTML = "Mensaje enviado con éxito!!!"

      clearErrors();
      clearInputs();
    }
  }

// Limpiar errores

  function clearErrors() {
    errorName.innerHTML = "";
    errorCase.innerHTML = "";
    errorMessage.innerHTML = "";
  }
  function clearInputs() {
    nameInput.value = "";
    caseInput.value = "";
    messageInput.value = "";
  }