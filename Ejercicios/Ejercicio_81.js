// Crea una función de nos devuelva el elemento mayor de un arreglo de números.

let numeros = [2, 9, 0, 6, 1, 2, 1, 5];

function mayorNumero(arregloNumeros) {
    let NumeroMayor = arregloNumeros[0];
    for (let i = 1; i < arregloNumeros.length; i++) {
        if (arregloNumeros[i] > NumeroMayor) {
            NumeroMayor = arregloNumeros[i];
        }
    }
    return NumeroMayor;
}
alert(`El numero mayor de ${numeros} es:  ` + mayorNumero(numeros));
