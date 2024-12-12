// Un jefe de obra con el dinero que tiene compra cinco juegos de llaves hexagonales cada
// uno por $11500. Una bomba en $1168000 y tres cajas de pernos cada uno por $87000.
// Después de pagar le sobran $91000. ¿Cuánto dinero tenía?

let dinero = 91000;
let juegos = 5;
let bomba = 1;
let pernos = 3;
let precioJuegos = juegos * 11500;
let precioBomba = bomba * 1168000;
let precioPernos = pernos * 87000;

alert(`El dinero que tenia el jefe de obra era de: ` + (dinero + precioJuegos + precioBomba + precioPernos));