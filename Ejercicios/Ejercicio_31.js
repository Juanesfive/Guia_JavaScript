// Se requiere calcular la distancia entre dos puntos, realizar el código que permita hallar la
// solución, por favor utilizar funciones matemáticas para ello.:
// a. rc((x2-x1)^2 + (y2-y1)^2).

let x1 = parseInt(prompt("Ingrese el valor de x1"));
let y1 = parseInt(prompt("Ingrese el valor de y1"));

let x2 = parseInt(prompt("Ingrese el valor de x2"));
let y2 = parseInt(prompt("Ingrese el valor de y2"));

alert(`La distancia entre los puntos es: ` + Math.sqrt((x2-x1)**2 + (y2-y1)**2));