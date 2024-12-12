// En cierta empresa se les paga a sus trabajadores de la siguiente forma: si el empleado es
// de planta, la hora trabajada se le paga a $20000, si el empleado es administrativo, la hora
// trabajada se le paga a $10000. Para calcular su pago es necesario conocer el total de
// horas trabajadas.

let tipoEmpleado = prompt("Ingrese el tipo de empleado (Planta o Administrativo)");

let horasTrabajadas = parseInt(prompt("Ingrese las horas trabajadas"));

if (tipoEmpleado === "Planta") {
    alert(`El pago del empleado de planta es de: ` + (horasTrabajadas * 20000));
} else if (tipoEmpleado === "Administrativo") {
    alert(`El pago del empleado administrativo es de: ` + (horasTrabajadas * 10000));
}

