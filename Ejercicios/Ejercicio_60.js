// Hacer un programa que permita ingresar n cantidad de cursos, si la cantidad de cursos que
// lleva el alumno es menor que 6 el pago será $2.000.000 por cada curso, pero si la cantidad
// de cursos es mayor que 6 el pago será únicamente de $1.200.000.

let cantidadCursos = parseInt(prompt("Ingrese la cantidad de cursos"));

if (cantidadCursos < 6) {
    alert(`El pago es de: ` + (cantidadCursos * 2000000));
} else {
    alert(`El pago es de: ` + (cantidadCursos * 1200000));
}