// Escribir un programa que pida al usuario un número entero y muestre por pantalla si es un
// número primo o no.

let num = parseInt(prompt("Ingrese un numero entero"));
let esPrimo = true;

for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        esPrimo = false;
        break;
    }
}

if (esPrimo) {
    alert("El numero es primo");
} else {
    alert("El numero no es primo");
}