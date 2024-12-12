// Una papelería vende libros a $10.000, cuadernos $ 7.550, y lapiceros a $5.550. Calcular el
// monto total de la venta, según la cantidad de artículos solicitados durante el día.

let libros = 10000;
let cuadernos = 7550;
let lapiceros = 5550;

let cantidadLibros = parseInt(prompt("Ingrese la cantidad de libros"));
let cantidadCuadernos = parseInt(prompt("Ingrese la cantidad de cuadernos"));
let cantidadLapiceros = parseInt(prompt("Ingrese la cantidad de lapiceros"));

alert(`El monto total de la venta es de: ` + (libros * cantidadLibros + cuadernos * cantidadCuadernos + lapiceros * cantidadLapiceros));
