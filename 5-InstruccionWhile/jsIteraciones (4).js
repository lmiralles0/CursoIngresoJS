function mostrar()
{

	var numero = parseInt(prompt("ingrese un número entre 0 y 9."));
    while(!(numero >= 0 && numero < 10) || (numero == isNaN)){
		numero = parseInt(prompt("Su numero no esta entre el 0 y 9. Ingrese un número entre 0 y 9."));
	} 
	document.getElementById("Numero").value = numero;

}//FIN DE LA FUNCIÓN