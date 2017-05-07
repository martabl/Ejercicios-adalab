// 2. Partiendo de la función anterior, modíficala para que además las cartas rojas sumen el doble.
// Prueba a invocarla con varias manos de cartas.
// otra solución

function rateCard(card) {
  var punctuation = card.value;
  if (card.value===1){
    punctuation = 20;
  }
  if (card.suit === 'c'|| card.suit ==='d') {
    punctuation = punctuation*2;
}
return punctuation;
}

function rateHand(hand) {
  var total = 0;
  for (var i= 0; i<hand.length; i++) {
    total = total + rateCard(hand[i]);
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
