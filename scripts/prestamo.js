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
  