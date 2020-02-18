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
      while (isNaN(numeroIngresado)) {
        numeroIngresado = prompt("Lo que ingresaste no era un numero");
        numeroIngresado = parseInt(numeroIngresado);
     }
      //En esta parte del codigo sabemos que el numero es correcto
      contador++; // contador = contador + 1
      acumulador = acumulador + numeroIngresado;
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
