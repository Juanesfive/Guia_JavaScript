// Para tributar un determinado impuesto se debe ser mayor de 16 años y tener unos
// ingresos iguales o superiores a 1000 mensuales, escribir un programa que pregunte al
// usuario su edad e ingresos mensuales y muestre por pantalla si el usuario debe tributar o
// no

let edad = parseInt(prompt("Ingrese su edad"));
let ingresos = parseInt(prompt("Ingrese sus ingresos mensuales"));

if (edad > 16 && ingresos >= 1000) {
    console.log("debe tributar");
    
} else {
    console.log("no debe tributar");

}    
