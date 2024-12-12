// Escribir un programa que calcule la longitud y el área de una circunferencia.

let radio = parseInt(prompt("Ingrese el radio de la circunferencia"));

let longitud = 2 * Math.PI * radio;

let area = Math.PI * radio * radio;

alert(`La longitud de la circunferencia es: ${longitud}`);

alert(`El area de la circunferencia es: ${area}`);
