function mostrar()
{
  var numero;
  var maximo = 0;
  var minimo = 0;
  var flag = 0;
  var respuesta = 's';

  while(respuesta == 's'){
    numero = parseInt(prompt("Ingrese numero."));
     
    while(isNaN(numero)){
      numero = parseInt(prompt("Error. Ingrese numero."));
    }
    if (flag == 0 || numero < minimo){
     minimo = numero;
    }  
    if (flag == 0 || numero > maximo){
      maximo = numero;
      flag = 1;
      
    }

    respuesta = prompt("Si desea continuar, ingrese 's'.");
}
console.log(maximo);
console.log(minimo);

document.getElementById("maximo").value = maximo;
document.getElementById("minimo").value = minimo;

}



/*function mostrar()
{
  //declarar variables
  var numeroIngresado;
  var maximo;
  var minimo;
  var flag = 0;
  var respuesta = 'si';

	while(respuesta != 'no'){
		numeroIngresado = prompt("Ingrese un numero ");
    numeroIngresado = parseInt(numeroIngresado);
    while (isNaN(numeroIngresado)) {
        numeroIngresado = prompt("Lo que ingresaste no era un numero");
        numeroIngresado = parseInt(numeroIngresado);
      }
       //observar si son maximos y minimos
  if (flag == 0){
    //entrariamos la primera vez y solo primera vez
    maximo = numeroIngresado;
    minimo = numeroIngresado;
    flag = 1;
  }else if(numeroIngresado > maximo){
    maximo = numeroIngresado;
  }else if(numeroIngresado < minimo){
    minimo = numeroIngresado;
  }
   respuesta = prompt("Desesa continuar? Si desea continuar escriba si");

	}//fin del while
document.getElementById("").value = maximo;
document.getElementById("").value = minimo;

}//FIN DE LA FUNCIÓN*/
