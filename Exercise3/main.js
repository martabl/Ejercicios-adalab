// 3. Desarrolla un programa que use la función anterior para puntuar las manos de cartas de dos jugadores
//  e imprima por consola al ganador, es decir, al que obtenga mayor puntuación.
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

function rateHand(hand1,hand2) {
  var total1 = 0;
  var total2 = 0;
  for (var i= 0; i<hand1.length; i++) {
    total1 = total1 + rateCard(hand1[i]);
  }
  for (var j = 0; j < hand2.length; j++) {
    total2 = total2 + rateCard(hand2[j]);
  }
  if (total1>total2) {
    console.log('el ganador es HAND1');
  }
  else {
    console.log('el ganador es HAND2');
  }
}

function program(){
  var hand1 = [{suit: 'c', value: 1},
  {suit: 'p', value: 5},
  {suit: 'd', value: 12},
  {suit: 'c', value: 10}];
  var hand2 = [{suit:'c', value: 12},
  {suit: 'p', value: 5},
  {suit: 't', value: 3},
  {suit: 't', value: 10}];
  var punctuation = rateHand(hand1,hand2);
}

program();
