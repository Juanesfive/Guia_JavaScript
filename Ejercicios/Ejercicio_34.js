// Generar el algoritmo que dé como resultado el tiempo estimado para el llenado de un
// depósito.
// a. Q = V/t, siendo Q (caudal), V (volumen) y t (tiempo).
// b. Volumen = PI *(radio^2)* H (altura del depósito).
// El tiempo se encuentra en minutos. Normalmente se mide el volumen en litros y el tiempo
// en segundos

let radio = parseInt(prompt("Ingrese el radio del depósito"));

let altura = parseInt(prompt("Ingrese la altura del depósito"));

let volumen = Math.PI * (radio * radio) * altura;

let caudal = parseInt(prompt("Ingrese el caudal"));

alert(`El tiempo estimado para el llenado del depósito es: ` + (volumen / caudal) + " minutos");