// Crea una función que calcule la longitud de una palabra si es corta o si es larga. (palabras
//     cortas menores de 5 caracteres).

let palabra = prompt("Ingrese una palabra");
function longitudDePalabra(palabra) {
    if (palabra.length < 5) {
        alert("La palabra es corta");
    } else {
        alert("La palabra es larga");
    }
}

const resultado = longitudDePalabra(palabra);
// console.log(resultado);