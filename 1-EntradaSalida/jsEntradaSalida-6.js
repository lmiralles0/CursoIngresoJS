/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
  var numUno;
  var numDos;
  var resultado;

  numUno = parseInt(document.getElementById("numeroUno").value);
  numDos = parseInt(document.getElementById("numeroDos").value);
  resultado = (numUno + numDos);

  alert ("El resultado de la suma es " + resultado + ".");
}

