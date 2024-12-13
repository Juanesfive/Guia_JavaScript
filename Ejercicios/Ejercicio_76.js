// Crea una función que tome un número como argumento y devuelva la cadena si el
// número es par o impar.

let numero = parseInt(prompt("Ingrese un numero"));

function numeroPar(numero) {
    if (numero % 2 === 0) {
        return ("El numero es par");
    } else {
        return ("El numero es impar");
    }
}


const esPar = numeroPar(numero);

alert(esPar);

