/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

var numUno;
var numDos;
var resultado;

function sumar()
{	
    numUno = parseInt(document.getElementById("numeroUno").value);
    numDos = parseInt(document.getElementById("numeroDos").value);
    resultado = (numUno + numDos);
    alert("El resultado de la suma es " + resultado + ".");
}

function restar()
{
    numUno = parseInt(document.getElementById("numeroUno").value);
    numDos = parseInt(document.getElementById("numeroDos").value);
    resultado = (numUno - numDos);
    alert("El resultado de la resta es " + resultado + ".");
}

function multiplicar()
{ 
	numUno = parseInt(document.getElementById("numeroUno").value);
    numDos = parseInt(document.getElementById("numeroDos").value);
    resultado = (numUno * numDos);
    alert("El resultado de la multiplicacion es " + resultado + ".");
}

function dividir()
{
	numUno = parseInt(document.getElementById("numeroUno").value);
    numDos = parseInt(document.getElementById("numeroDos").value);
    resultado = (numUno / numDos);
    alert("El resultado de la division es " + resultado + ".");
}

