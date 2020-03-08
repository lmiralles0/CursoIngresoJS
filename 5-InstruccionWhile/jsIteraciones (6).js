function mostrar()
{
var numeroIngreso;
var contadorNum = 0;
var acumulador = 0;
var promedio;


while (contadorNum < 5){

   numeroIngreso = parseInt(prompt("Ingrasar numero."));
   while(isNaN(numeroIngreso)){
    numeroIngreso = parseInt(prompt("Eso no es un numero. Ingrese numero."));
   } 
   contadorNum ++;
   acumulador += numeroIngreso;
 }
  document.getElementById("suma").value = acumulador; 
  promedio = acumulador /5;
  document.getElementById("promedio").value = promedio; 



}//FIN DE LA FUNCIÓN
/*
function mostrar()
{
  var numeroIngresado // asignar numeros que se ingresan
	var contador = 0; // para contar en bucle (cuantas veces giro)
	var acumulador = 0; // para sumar los numeros ingresados
  var promedio // para guardar el promedio



  do {
      //Ingresar el numero
      numeroIngresado = prompt("Ingrese un numero ");
      numeroIngresado = parseInt(numeroIngresado);
      //validar que el dato este correcto
      while (isNaN(numeroIngresado)) {
        numeroIngresado = prompt("Lo que ingresaste no era un numero");
        numeroIngresado = parseInt(numeroIngresado);
     }
      //En esta parte del codigo sabemos que el numero es correcto
      contador++; // contador = contador + 1
      acumulador += numeroIngresado;
      console.log("El contador es : "+contador);
      console.log("Se encuentra acumulando : "+ acumulador);
      } while (contador < 5) {

    }
//Muestra el acumulador
document.getElementById('suma').value = acumulador;
promedio = acumulador / contador;
// Mostramos el promedio
document.getElementById('promedio').value = acumulador/5;

}//FIN DE LA FUNCIÓN

*/