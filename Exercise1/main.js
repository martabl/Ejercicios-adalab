// 1. Desarrolla una función que puntúe una mano de cartas, que tenga como parámetro un array de cartas,
// cada una representada por un diccionario con palo y valor.
//  Al puntuar, las cartas suman su valor excepto si es un as que suma 20.
//  Prueba a invocarla con varias manos de cartas con y sin ases.

function rateCard(card) {
  var punctuation = card;
  if (card===1){
    punctuation = 20;
  }
  return punctuation;
}

function rateHand(hand) {
  var total = 0;
  for (var i= 0; i<hand.length; i++) {
    total = total + rateCard(hand[i].value);
  }
  return total;
}

function printPunctuation(punctuation) {
  console.log('la puntuación de la mano es:' + ' ' + punctuation);
}

function program(){
  var hand = [{suit: 'c', value: 1},
  {suit: 'p', value: 5},
  {suit: 'd', value: 12},
  {suit: 'c', value: 6}];
  var punctuation = rateHand(hand);
  printPunctuation(punctuation);
}
program();

var otherHand = [{suit:'c', value: 2},
{suit: 'p',value: 5},
{suit: 't', value: 6}];
var otherPunctuation = rateHand(otherHand);
console.log('el resultado total es:'+ ' '+ otherPunctuation);
