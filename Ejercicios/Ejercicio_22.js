// Escribir un programa que muestre el pago de una llamada telefónica sabiendo que cada
// minuto cuesta $355 pesos y un IVA 20%

let tiempo = parseInt(prompt("Ingrese el tiempo de la llamada"));
let precio = 355;
let iva = 0.20;

alert(`El precio de la llamada es: ` + (precio * tiempo * iva) + " pesos");