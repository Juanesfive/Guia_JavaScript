// Un estudiante realiza cuatro exámenes. Realizar un algoritmo correspondiente para
// obtener el promedio de las calificaciones obtenidas. Las calificaciones van 1 a 5 puntos.

let examen1 = parseInt(prompt("Ingrese la calificacion del examen 1"));
let examen2 = parseInt(prompt("Ingrese la calificacion del examen 2"));
let examen3 = parseInt(prompt("Ingrese la calificacion del examen 3"));
let examen4 = parseInt(prompt("Ingrese la calificacion del examen 4"));

alert(`El promedio final es: ` + ((examen1 + examen2 + examen3 + examen4) / 4));