// Escriba una expresión regular que reconozca los números en punto flotante (por ejemplo -
//     2.3e-1, -3e2, 23, 3.2).

let exprecion = /[-+]?[0-9]*\.?[0-9]+(?:[eE][-+]?[0-9]+)?/g;

console.log(exprecion);