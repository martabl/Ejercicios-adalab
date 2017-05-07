// // Ejercicio 1
// // Creamos una función que tomará como parámetros un número y un array de números.
// La función va a devolver el número de veces que está repetido ese número en el array.
//  Por ejemplo, si le pasamos un 1 y [1,3,4,2,1,3,4,5],  la función devolverá un 2,
//   porque el número 1 aparece dos veces en el array.
// //
// // function cuentaNumeros (numero, arrayNumeros){
// //  //Escribe aquí el código
// // }

function countNumber (number, arrayNumber) {
  var howManyNumber = 0;
  for (var i = 0; i < arrayNumber.length; i++) {
    if (arrayNumber[i] === number) {
      howManyNumber = howManyNumber + 1;
    }
  }
  return howManyNumber;
}
var repetition = countNumber(1, [5, 1, 6, 10, 1, 9]);
console.log(repetition);
