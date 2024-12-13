// Crea una función que tome un conjunto de números y devuelva el inverso aditivo de cada
// uno. Todo los positivos se devuelve negativo y todos los negativos se devuelve positivo.

let numeros = [-2, -9, -0, -6, 1, 2, 1, 5];

function inversoAditivo(numeros) {
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > 0) {
            console.log(numeros[i] * -1);
        } else {
            console.log(numeros[i] * -1);
        }
    }
    
}

inversoAditivo(numeros);



