// Crea una función que tome una cadena como parámetro y devuelva la cadena en orden
// inverso, por ejemplo, si la cadena de entrada es ‘Hola’, la función debería retornar ‘aloH’.


let cadena = prompt("Ingrese la palabra o frase que quiere invertir");

function cadenaInversa(cadena) {
    return cadena.split("").reverse().join("");
  }

  alert(`La cadena ${cadena} invertida es: `+ cadenaInversa(cadena));