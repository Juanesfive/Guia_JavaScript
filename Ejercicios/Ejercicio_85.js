// Obtén una serie de número y devuelve la suma de todos los números positivos, si no
// tenemos números positivos la sume debe devolver 0.

let serieNumeros = [-2, -9, -1, -6, -1, -2, 1, 5];

function suma(serieNumeros) {
    let suma = 0;
    for (let i = 0; i < serieNumeros.length; i++) {
        if (serieNumeros[i] > 0) {
            suma += serieNumeros[i];
        }
    }
    return suma;
}

console.log(suma(serieNumeros));

