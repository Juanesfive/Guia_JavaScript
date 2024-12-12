// Elaborar un algoritmo para calcular el promedio final de la materia de algoritmos. dicha
// calificación se compone de los siguientes porcentajes:
// a. 55% del promedio final de sus calificaciones de los tres (3) parciales.
// b. 30% de la calificación examen final.
// c. 15% de la calificación trabajo final.

let parcial1 = parseInt(prompt("Ingrese la calificacion del parcial 1"));

let parcial2 = parseInt(prompt("Ingrese la calificacion del parcial 2"));

let parcial3 = parseInt(prompt("Ingrese la calificacion del parcial 3"));

let examen = parseInt(prompt("Ingrese la calificacion del examen"));

let trabajo = parseInt(prompt("Ingrese la calificacion del trabajo"));

alert(`El promedio final es: ` + ((parcial1 + parcial2 + parcial3) / 3) * 0.55 + examen * 0.3 + trabajo * 0.15);