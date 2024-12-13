// Implemente una función que sume dos números y devuelva su suma en binario, el
// número binario devuelto debe ser una cadena.

let num1 = parseInt(prompt("Ingrese el primer numero"));
let num2 = parseInt(prompt("Ingrese el segundo numero"));

function sumarBinario(num1, num2) {
    let suma = num1 + num2;

    return suma.toString(2);
}
alert(`La suma del numero ${num1} y ${num2} convertido a binario es: ` + sumarBinario(num1, num2));