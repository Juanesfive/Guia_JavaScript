// Escribe una función que genere de forma aleatoria un numero entre 1 y 10, y verifica si
// este número es par o impar.

let numero = Math.floor(Math.random() * 10) + 1;

function esPar(numero) {
    if (numero % 2 === 0) {
        console.log(`El numero ${numero} es par`);
    } else {
        console.log(`El numero ${numero} es impar`);
    }
    
}

 esPar(numero);


