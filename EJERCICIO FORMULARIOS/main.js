var daysElement = document.getElementById('days');
var yearsElement = document.getElementById('years');

function getDays (){
  var firstDay = 1;
  var lastDay = 32;
  for (var i = firstDay; i <lastDay ; i++) {
    daysElement.innerHTML += '<option>' + parseInt(i) + '</option>';
  }
}
getDays();


function getYear (){
  var firstYear = 1900;
  var lastYear = 2018;
  for (var j = firstYear; j < lastYear; j++) {
    yearsElement.innerHTML += '<option>' + parseInt(j) + '</option>';
  }
}getYear ();



function buttonCreate(){
  var name = document.getElementById('name').value;
  var email1 = document.getElementById('email').value;
  var email2 = document.getElementById('remail').value;
  if (email1===email2) {
    alert('Gracias ' + name + ', la cuenta se ha creado correctamente.');
  }else{
    alert('No se ha podido crear la cuenta.');
    document.getElementById('remail').style.border = "2px solid red";

  }
}

var btnCreate = document.querySelector(".buttonAnAccount");
btnCreate.addEventListener("click", buttonCreate);
