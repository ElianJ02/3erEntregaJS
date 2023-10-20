function toggleTheme() {
  var element = document.body;
  var isDarkMode = element.classList.contains("dark-mode");

  // Alternar la clase "dark-mode" en el elemento <body>//
  element.classList.toggle("dark-mode");

  // Almacenar la preferencia de modo en localStorage//
  localStorage.setItem("theme", isDarkMode ? "light" : "dark");

  // Cambiar la imagen en función del modo//
  var image = document.getElementById("modo-imagen");
  if (isDarkMode) {
    image.src = "../resources/moon.png"; // Ruta de la imagen para el modo oscuro//
  } else {
    image.src = "../resources/sun.png"; // Ruta de la imagen para el modo claro//
  }
}

// Recuperar la preferencia de tema almacenada en localStorage al cargar la página//
document.addEventListener("DOMContentLoaded", function() {
  var theme = localStorage.getItem("theme");
  var element = document.body;
  
  // Aplicar el tema almacenado (si existe)//
  if (theme === "dark") {
    element.classList.add("dark-mode");
  }

  // Cambiar la imagen en función del modo//
  var image = document.getElementById("modo-imagen");
  if (theme === "dark") {
    image.src = "../resources/sun.png"; // Ruta de la imagen para el modo oscuro//
  } else {
    image.src = "../resources/moon.png"; // Ruta de la imagen para el modo claro//
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const calcularButton = document.getElementById("calcular");

  const tasasInteres = {
      baja: 0.05,
      media: 0.1,
      alta: 0.15
  };

  calcularButton.addEventListener("click", calcularCuotaMensual);

  function calcularCuotaMensual() {
      const monto = parseFloat(document.getElementById("monto").value);
      const meses = parseInt(document.getElementById("meses").value);
      const interesSeleccionado = document.getElementById("interes").value;

      if (!isNaN(monto) && !isNaN(meses) && interesSeleccionado in tasasInteres) {
          const tasaInteres = tasasInteres[interesSeleccionado];
          const cuota = (monto * tasaInteres) / (1 - Math.pow(1 + tasaInteres, -meses));
          document.getElementById("cuota").textContent = cuota.toFixed(2);
      } else {
          alert("Error, Por favor ingrese valores validos");
      }
  }
});

function cerrarImagen(id) {
  var imageContainer = document.querySelector(`.image-container:nth-child(${id})`);
  imageContainer.style.display = "none";
}
// funcion de mensaje/alerta //
document.addEventListener("DOMContentLoaded", function () {
  const botonMostrarMensaje = document.getElementById("mostrarMensaje");

  botonMostrarMensaje.addEventListener("click", function () {
      alert("Mensaje enviado exitosamente");
  });
});
