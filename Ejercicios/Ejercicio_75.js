// Crea una función que reciba dos números como parámetros y devuelva el mayor de
// ellos.
let numero1 = parseInt(prompt("Ingrese el primer numero"));
let numero2 = parseInt(prompt("Ingrese el segundo numero"));


function obtenerElMayor(numero1, numero2) {
    if (numero1 > numero2) {
        return numero1;
        
    } else {
        return numero2;
        
    }
    
}

const elMayor = obtenerElMayor(numero1, numero2);

alert(`El numero mayor es: ${elMayor}`);





