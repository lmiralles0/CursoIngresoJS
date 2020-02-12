/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

var PreUno;
var PreDos;
var PreTres;
var Resultado;
var Resultado1;

function Sumar ()
{
  PreUno = parseInt(document.getElementById("PrecioUno").value);
  PreDos = parseInt(document.getElementById("PrecioDos").value);
  PreTres = parseInt(document.getElementById("PrecioTres").value);
  Resultado = parseInt(PreUno + PreDos + PreTres);
   alert("La suma es " + Resultado);
}
function Promedio ()
{
  PreUno = parseFloat(document.getElementById("PrecioUno").value);
  PreDos = parseFloat(document.getElementById("PrecioDos").value);
  PreTres = parseFloat(document.getElementById("PrecioTres").value);
  Resultado = parseFloat(PreUno % PreDos % PreTres);
   alert("EL promedio es " + Resultado);
}
function PrecioFinal ()
{
  PreUno = parseFloat(document.getElementById("PrecioUno").value);
  PreDos = parseFloat(document.getElementById("PrecioDos").value);
  PreTres = parseFloat(document.getElementById("PrecioTres").value);
  Resultado = parseFloat((PreUno + PreDos + PreTres)*(0.21));
  Resultado1 = parseFloat(PreUno + PreDos + PreTres + Resultado);
   alert("EL precio final + IVA es " + Resultado1);
}
