// Crea una función para calcular cuantas silabas tiene cada palabra, imprime el resultado
// en la consola.


let palabras = prompt("Ingrese la cantidad de palabras que quieras para saber las silabas que contiene");

function contarLasSilabas(palabras) {
    let silabas = 0;
    for (let i = 0; i < palabras.length; i++) {
        if (palabras[i] === "a" || palabras[i] === "e" || palabras[i] === "i" || palabras[i] === "o" || palabras[i] === "u") {
            silabas++;
        }
    }
    return silabas;
}

console.log("La cantidad de silabas es las palabras que ingresaste son: " + contarLasSilabas(palabras));