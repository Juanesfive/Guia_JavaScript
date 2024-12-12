// Escriba un algoritmo que permita obtener las raíces reales de la ecuación de segundo
// grado: a * x2 + b + x + c, siendo X un valor constante.

const a = parseFloat(prompt('Ingresa el valor de a:'));
const b = parseFloat(prompt('Ingresa el valor de b:'));
const c = parseFloat(prompt('Ingresa el valor de c:'));

const discriminante = b * b - 4 * a * c;
const raices = discriminante > 0 
    ? [
        (-b + (discriminante ** 0.5)) / (2 * a), 
        (-b - (discriminante ** 0.5)) / (2 * a)
      ]
    : discriminante === 0 
    ? [(-b / (2 * a))]
    : [];

alert(raices.length > 0 
    ? 'Las raíces son: ' + raices[0] + (raices[1] ? ', ' + raices[1] : '') 
    : 'No hay raíces reales'
);