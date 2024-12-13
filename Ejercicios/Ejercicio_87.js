// Escribe una función que tome una cadena y devuelva una nueva cadena sin las vocales.

let cadena = prompt("Ingrese la palabra o frase que quiere elimnar las vocales");

function quitarVocales(cadena) {
  return cadena.replace(/[aeiou]/gi, "");
}

alert(`La cadena ${cadena} sin vocales es: ` + quitarVocales(cadena));
