// Calcular el sueldo de un empleado dados como datos de entrada:
// a. Nombre.
// b. horas de trabajo.
// c. pago en hora.

let nombre = prompt("Ingrese su nombre");
let horas = parseInt(prompt("Ingrese las horas trabajadas"));
let pago = parseInt(prompt("Ingrese el pago por hora"));

alert(`El sueldo de ${nombre} es: ` + (horas * pago));