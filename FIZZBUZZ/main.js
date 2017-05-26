var firstNumber = 1;
var lastNumber = 100;

for (var i = firstNumber ; i <= lastNumber; i++) {

  var multipleTres = i % 3 === 0;
  var multipleCinco = i % 5 === 0;

  if (multipleTres&&multipleCinco) {
    document.write('FizzBuzz');
    document.write('<br/>');
  }else if (multipleTres) {
    document.write ("Fizz");
    document.write("<br/>");
  } else if (multipleCinco) {
    document.write ("Buzz");
    document.write("<br/>");
  } else {
    document.write (i);
    document.write("<br/>");

  }
}
