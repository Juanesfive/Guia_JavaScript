// Tres estudiantes reunieron tapas de gaseosas para repartirlas y venderlas al final del año.
// Martín toma 2/3 del total, Jairo un cuarto del total, y Lorena se queda con el resto. ¿Qué
// parte le corresponde a Lorena?

let total = 10000;
let martin = (total * 2) / 3;
let jairo = (total * 1) / 4;
let lorena = total - (martin + jairo);

alert(`Lorena le corresponde: ` + lorena);



