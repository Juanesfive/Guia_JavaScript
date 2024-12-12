// Se desea realizar una aplicación que ingrese el nombre del mes y mostrar que signo
// zodiacal pertenece, para ello usar if_else anidados.

let mes = prompt("Ingrese el mes");

if (mes === "enero" || mes === "febrero" || mes === "marzo") {
    alert("Acuario");
} else if (mes === "abril" || mes === "mayo" || mes === "junio") {
    alert("Piscis");
} else if (mes === "julio" || mes === "agosto" || mes === "septiembre") {
    alert("Aries");
} else if (mes === "octubre" || mes === "noviembre" || mes === "diciembre") {
    alert("Libra");
}