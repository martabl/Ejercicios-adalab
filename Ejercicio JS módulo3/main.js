// 1. Programa un ejemplo que almacene en un array todas las cartas de la baraja,
//  cada una representada con un diccionario que tenga un palo y un valor.

var baraja = [];
var palos = ['p', 'd', 't', 'c'];

for (var cursorPalo=0; cursorPalo < palos.length; cursorPalo++) {
  for (var cursorValor=1; cursorValor<=12; cursorValor++){

      baraja[baraja.length] = { valor: cursorValor, palo: palos[cursorPalo]};
  }
}


//2. Partiendo del array que has construido en el ejercicio anterior, construye un algoritmo que filtre
//en un nuevo array sólo las cartas rojas, y en otro array las cartas negras.

var baraja = [];
var palos = [
    { nombre: 'p', color: 'negro'},
    { nombre: 'd', color: 'rojo'},
    { nombre: 't', color: 'negro'},
    { nombre: 'c', color: 'rojo'}
];

var negras = [];
var rojas = [];

for (var cursorPalo=0; cursorPalo < palos.length; cursorPalo++) {
  for (var cursorValor=1; cursorValor<=12; cursorValor++){
      baraja[baraja.length] = { valor: cursorValor, palo: palos[cursorPalo]};
  }
}

for(var cursorBaraja = 0; cursorBaraja < baraja.length; cursorBaraja++) {
    if (baraja[cursorBaraja].palo.color === 'rojo') {
        rojas[rojas.length] = baraja[cursorBaraja];
    } else if (baraja[cursorBaraja].palo.color === 'negro'){
        negras[negras.length] = baraja[cursorBaraja];
    }
}



// 3. Partiendo del array que has construido en el ejercicio anterior,
// construye un algoritmo que filtre en un nuevo array las cartas rojas y pares.
// Luego imprime en la consola la última carta de ese nuevo array.
var baraja = [];
var palos = [
    { nombre: 'p', color: 'negro'},
    { nombre: 'd', color: 'rojo'},
    { nombre: 't', color: 'negro'},
    { nombre: 'c', color: 'rojo'}
];

var negras = [];
var rojas = [];

for (var cursorPalo=0; cursorPalo < palos.length; cursorPalo++) {
  for (var cursorValor=1; cursorValor<=12; cursorValor++){
      baraja[baraja.length] = { valor: cursorValor, palo: palos[cursorPalo]};
  }
}

for(var cursorBaraja = 0; cursorBaraja < baraja.length; cursorBaraja++) {
    if (baraja[cursorBaraja].palo.color === 'rojo' && (baraja[cursorBaraja].valor%2 === 0)) {
      rojas[rojas.length] = baraja[cursorBaraja];
        }
}
console.log(rojas[rojas.length-1]);
