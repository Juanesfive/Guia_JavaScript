// Escribir un programa que calcule el volumen de un elipsoide.

let radio1 = parseInt(prompt("Ingrese el radio 1 del elipsoide"));

let radio2 = parseInt(prompt("Ingrese el radio 2 del elipsoide"));

let radio3 = parseInt(prompt("Ingrese el radio 3 del elipsoide"));

alert(`El volumen del elipsoide es: ` + (4/3 * Math.PI * radio1 * radio2 * radio3));