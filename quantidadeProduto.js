let somar = document.getElementById("mais");
let diminuir = document.getElementById("menos");
let contador = document.getElementById("contador");
let prevValue;


function calcular() {
  var value = contador.value;
  var isValid = /^[1-9][0-9]*$/.test(value);

  if (!isValid) {
    contador.value = prevValue;
    } else {
      prevValue = value;
    }


    somar.onclick = function() {
      contador.value = Number(contador.value) + 1;
      calcular();
    };

    diminuir.onclick = function() {
      contador.value = Number(contador.value) - 1;
      calcular();
    };

    contador.onchange = function() {
      calcular();
    };

    contador.onkeyup = function() {
      if (contador.value === "") {
        return;
      }
      calcular();
    };

    calcular();
  
  }
}