// Ejercicio 2
// Vamos a crear una función JavaScript que toma un parámetro que es una cadena (texto).
// Si la cadena es de longitud impar, devuelve el carácter central. Si la longitud de la cadena es par,
//  devuelve "Sólo funciono con cadenas de longitud impar".
//
// function caracterCentral(cadena){
//   //Escribe aquí el código
//
// }
function characterCentral (text) {
  var value = "Sólo funciono con cadenas de longitud impar.";
  if (text.length % 2 != 0) {
    value = text[(text.length - 1)/2];
  }
  return value;
}
console.log(characterCentral ('aeiou'));
