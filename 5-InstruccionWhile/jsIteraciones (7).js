function mostrar()
{
  var numeroIngresar;
 	var contador = 0;
  var acumulador = 0;
  var promedio;
  var respuesta = 'si';

  while (respuesta == "si"){

    numeroIngresar = parseInt(prompt("Ingrese un numero."));
    while(isNaN(numeroIngresar)){
      numeroIngresar = parseInt(prompt("Error. Ingrese un numero."));
    } 
    contador ++;
    acumulador += numeroIngresar;
     
    respuesta = prompt("Desea contiunar? Escriba si para continuar.");
  }

  
  
document.getElementById('suma').value = acumulador;
promedio = (acumulador / contador);
document.getElementById('promedio').value = promedio;

}//FIN DE LA FUNCIÓN
/*
	do {
		numeroIngresado= prompt("Ingrese un número:");
		numeroIngresado=parseInt(numeroIngresado);
		while (isNaN(numeroIngresado)) {
		numeroIngresado= prompt("No es un número válido.");
		numeroIngresado=parseInt(numeroIngresado);
		}
		
		contador++;
		acumulador= acumulador + numeroIngresado;
		numeroIngresado= prompt("¿Desea seguir agregando?");
		
	} while (numeroIngresado == respuesta){
			contador++;
			acumulador= acumulador + numeroIngresado;
			
			console.log("El contador es: "+contador);
			console.log("Se encuentra acumulando : "+acumulador);
		}
		document.getElementById("suma").value=acumulador;
		document.getElementById("promedio").value=acumulador/contador;
			*/
