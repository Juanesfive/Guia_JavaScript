// Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla
// todos los números impares desde 1 hasta ese número separados por coma.

let numero = parseInt(prompt("Ingrese un numero entero positivo"));

let impares = [];

for (let i = 1; i <= numero; i++) {
    if (i % 2 !== 0) {
        impares.push(i);
    }
}

console.log(impares.join(", "));
