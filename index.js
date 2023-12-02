// Función para calcular el valor del seguro
document.addEventListener('DOMContentLoaded', function() {
  const enviarBtn = document.getElementById('enviarBtn');
  enviarBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto
    const tipoSeguro = document.getElementById('tipoInput').value;
    const valorSeguro = calcularValorSeguro(tipoSeguro);
    mostrarResultado(valorSeguro);
    limpiarFormulario(); // Limpia los campos del formulario
  });

  const formInputs = document.querySelectorAll('input[type="text"], input[type="email"], select');
  formInputs.forEach(function(input) {
    input.addEventListener('input', function() {
      const isFormEmpty = checkFormEmpty();
      enviarBtn.disabled = isFormEmpty;
    });
  });
});

function calcularValorSeguro(tipoSeguro) {
  let valorSeguro = "";

  if (tipoSeguro === "basico") {
    valorSeguro = "$100.000";
  } else if (tipoSeguro === "intermedio") {
    valorSeguro = "$200.000";
  } else if (tipoSeguro === "premium") {
    valorSeguro = "$300.000";
  }

  return valorSeguro;
}

function mostrarResultado(valorSeguro) {
  const valorSeguroSpan = document.getElementById('valorSeguro');
  valorSeguroSpan.textContent = valorSeguro;
}

function checkFormEmpty() {
  const formInputs = document.querySelectorAll('input[type="text"], input[type="email"], select');
  let isFormEmpty = false;

  formInputs.forEach(function(input) {
    if (input.value === "") {
      isFormEmpty = true;
    }
  });

  return isFormEmpty;
}

function limpiarFormulario() {
  const formInputs = document.querySelectorAll('input[type="text"], input[type="email"], select');
  
  formInputs.forEach(function(input) {
    input.value = ""; // Limpia el valor de cada campo
  });

  formInputs[0].focus(); // Coloca el cursor en el primer campo
}


  
