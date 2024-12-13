// Escribir un programa que pregunte al usuario una cantidad a invertir, el interés anual y el
// número de años, y muestre por pantalla el capital obtenido en la inversión cada año que
// dura la inversión.

let cantidad = parseInt(prompt("Ingrese la cantidad a invertir"));
let interes = parseInt(prompt("Ingrese el interes anual"));
let años = parseInt(prompt("Ingrese la cantidad de años"));

for (let i = 0; i < años; i++) {
    cantidad = cantidad * (1 + (interes / 100));
    console.log(`Capital obtenido en el año ${i + 1}: ${cantidad.toFixed(2)}`);
}