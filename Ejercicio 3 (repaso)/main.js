// Ejercicio 3
// Vamos a crear una función que toma un parámetro que es un array de números.
// La función va a devolver un array que contiene sólo los números pares del array original.
//
// function encuentraPares(numeros){
//   //Escribe aquí el código
//
// }
function findEven (numbers) {
  var arrayEven =[];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      arrayEven [arrayEven.length] = numbers[i];
    }
  }
  return arrayEven;
}
console.log(findEven([1, 2, 3, 4, 5, 6]));
