/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
  var sueldo;
  var aumento;
  var resultado;

  sueldo = parseInt(document.getElementById("sueldo").value);
  aumento = parseFloat(sueldo * 10 / 100);
  resultado = (sueldo + aumento);
  document.getElementById("resultado").value = resultado;
   	
}
