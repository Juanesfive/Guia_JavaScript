// los tramos impositivos para la declaración de la renta en un determinado país son:
// a. entre 10000 y 20000 ---- 5%
// b. entre 20000 y 35000 ---- 10%
// c. entre 35000 y 60000 ---- 20%
// d. más de 60000 ---- 45%
// escribir un programa que pregunte al usuario su renta anual y muestre por pantalla el tipo
// de impositivo que le corresponde.

let renta = parseInt(prompt("Ingrese su renta anual"));

if (renta >= 10000 && renta <= 20000) {
    alert("Usted debe pagar el 5% de impuestos");

} else if (renta >= 20000 && renta <= 35000) {
    alert("Usted debe pagar el 10% de impuestos"); 

} else if (renta >= 35000 && renta <= 60000) {
    alert("Usted debe pagar el 20% de impuestos"); 

} else if (renta > 60000) {
    alert("Usted debe pagar el 45% de impuestos");
}   
   
