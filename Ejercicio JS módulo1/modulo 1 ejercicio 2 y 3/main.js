//
// 2. Define una variable cuyo valor sea una cadena que represente una carta de la baraja.
// Recuerda que representamos las cartas con una cadena formada por un número que representa el valor,
//  seguido de una letra que representa el palo.
//  Ahora crea otras dos variables que representan a la carta anterior y a las carta posterior en una baraja ordenada.
//  Finalmente, crea una última variable que concatene las cadenas de las 3 cartas anteriores
//  usando las variables que ya tienes.

var card = "5C";
var previousCard = "4C";
var nextCard = "6C";
var result = previousCard + card + nextCard;
console.log (result);

// 3. Define una variable cuyo valor sea una cadena que represente una carta de la baraja, cuyo valor sea mayor que 9.
// Ahora utiliza el operador para indexar la cadena, y accede al palo de la carta.
// ¿Cuál es la diferencia si la carta tiene un valor menor o igual que 9?
var card = "10C";
console.log(card [2]);

var cardMinor10 = "9C";
console.log (cardMinor10 [1]);
// la posición del palo cambia para localizarla con el índice.
