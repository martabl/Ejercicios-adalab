// 1. Programa un ejemplo que, dada una variable de tipo cadena con la carta del 4 de corazones,
// compruebe si es de corazones y además es el número 4. En caso afirmativo, lo imprimimos en la consola.
// Probamos el mismo programa con el 3 de corazones, y con el rey de corazones. ¿Qué sucede?

var numberStick = "4C";
if (numberStick[1]==="C" && numberStick[0]==="4"){
  console.log("La carta es el cuatro de corazones");
}
var numberStick = "3C";
if (numberStick[1]==="C" && numberStick[0]==="4"){
  console.log("La carta es el cuatro de corazones");
}
// En el caso de tener el 3 de corazones o el rey de corazones no ocurriría nada.



// 2. Utiliza un bucle para recorrer todos los años bisiestos anteriores a 2050, e imprímelos en la consola.
var leapYearInterval = 4;
var currentYear = 2017;
var givenYear = 2050;
var targetYear = givenYear - 1;
var targetLeapYear = targetYear - targetYear % leapYearInterval;
var totalLeapYears = targetLeapYear / leapYearInterval;
var lastLeapYear = currentYear - currentYear % leapYearInterval;
var elapsedLeapYears = lastLeapYear / leapYearInterval;
for (var i=1; i<=(totalLeapYears - elapsedLeapYears); i++){
  var LeapYear = (lastLeapYear + 4*i);
  console.log("Año Bisiesto" + LeapYear);
}


// 3. Utiliza un bucle para recorrer todas las cartas de la baraja, desde el 1 al 12 de cada palo.
// Imprime en pantalla solamente las cartas rojas que sea múltiplos de 3.
var cursor = 1;
var cursorSticks = 0;
var sticks = "pctd";
while (cursor <= 12 && cursorSticks < 4) {

  if (cursor % 3 === 0 && (cursorSticks === 1 || cursorSticks ===3)) {
    console.log('card:' + cursor + sticks[cursorSticks]);
  }

  if(cursor === 12) {
    cursorSticks++;
    cursor = 1;
  }
  else {
    cursor++;
  }
}
