function mostrar()
{
	var numero;
	var contador = 0;
	//var contadorP = 0;//
	//var contadorN = 0;//
	var positivo = 0;
	var negativo = 1;
    var respuesta='si';

    while(respuesta == 'si'){
		
		numero = parseInt(prompt("Ingrese numero."));
		while(isNaN(numero))
		{
			numero = parseInt(prompt("Error.Ingrese numero."));
		}
		//contador ++;//aca no hace falta
		if (numero > 0)
		{
		positivo = positivo + numero;
		//contadorP ++;// este tampoco
		}   
		else if (numero < 0)
		{
		negativo = negativo * numero;	
		//contadorN ++;// este tampoco
		}
	  	
		respuesta = prompt("Si desea continuar ingrese si.");
	} 
	//console.log("contador de cuantas veces si pidio un numero " +contador);
	//console.log("contador de los positivos que se ingreso " +contadorP);
	//console.log("contador de los negativos que se ingreso " +contadorN);
	console.log("el monto de la suma de positivos " +positivo);
	console.log("el monto de la multiplicacion de negativos " +negativo);



document.getElementById('suma').value = positivo;
document.getElementById('producto').value = negativo;

}//FIN DE LA FUNCIÓN


