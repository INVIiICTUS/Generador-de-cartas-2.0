import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const palos = ["corazon", "diamante", "pica", "trebol"];
const valores = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
let simArriba = document.querySelector("#simboloArriba");
let numero = document.querySelector("#numero");
let simAbajo = document.querySelector("#simboloAbajo");

function cartaEllection(arr1, arr2) {
  let carta = [];
  carta.push(arr1[Math.floor(Math.random() * arr1.length)]);
  carta.push(arr2[Math.floor(Math.random() * arr2.length)]);
  return carta;
}

function colorEllection(arr) {
  if (arr[0] === "corazon" || arr[0] === "diamante") {
    simArriba.style.color = "red";
    numero.style.color = "red";
    simAbajo.style.color = "red";
  } else {
    simArriba.style.color = "black";
    numero.style.color = "black";
    simAbajo.style.color = "black";
  }
}

function asignarPalo(arr) {
  if (arr[0] === "corazon") {
    simArriba.innerHTML = "♥";
    simAbajo.innerHTML = "♥";
  } else if (arr[0] === "diamante") {
    simArriba.innerHTML = "♦";
    simAbajo.innerHTML = "♦";
  } else if (arr[0] === "trebol") {
    simArriba.innerHTML = "♣";
    simAbajo.innerHTML = "♣";
  } else {
    simArriba.innerHTML = "♠";
    simAbajo.innerHTML = "♠";
  }
}

function asignarValor(arr) {
  numero.innerHTML = arr[1];
}

function generacionCarta() {
  let carta = cartaEllection(palos, valores);
  colorEllection(carta);
  asignarPalo(carta);
  asignarValor(carta);
}

window.onload = function baraja() {
  generacionCarta();
};
document.querySelector(".button").addEventListener("click", generacionCarta);

var segundos = document.getElementById("segundos");
var boton = document.getElementById("btnCuentaAtras");
var cuentaAtras = document.getElementById("cuentaAtras");
var notificacion = document.getElementById("notificacion");
segundos.focus();

var cuentatras = function() {
  notificacion.classList.remove("alert");
  notificacion.classList.remove("alert-success");
  notificacion.textContent = "";
  cuentaAtras.style.color = "black";

  var contador = segundos.value;
  cuentaAtras.textContent = contador;
  var valorCuentaAtras = setInterval(function() {
    if (contador > 0) {
      contador--;
      cuentaAtras.textContent = contador;
    } else {
      clearInterval(valorCuentaAtras);
      notificacion.textContent = "Suerte";
      notificacion.classList.add("alert-success");
      notificacion.classList.add("alert");
      segundos.value = "";
    }
    if (contador <= 3) {
      cuentaAtras.style.color = "black";
    }
    if (contador === 1) {
      cuentaAtras.textContent = "Suerte";
    }
    if (contador === 0) {
      cuentaAtras.textContent = "Suerte";
      location.reload();
    }
  }, 1000);
};

boton.addEventListener("click", cuentatras);
