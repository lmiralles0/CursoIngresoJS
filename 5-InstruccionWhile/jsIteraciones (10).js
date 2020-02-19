function mostrar()
{
  //declarar contadores y variables
  var contador = 0;
  var acumuladorPositivos = 0;
  var acumuladorNegativos = 0;
  var numeroIngresado;
  var cantidadNegativos = 0;
  var cantidadPositivos = 0;
  var cantidadCeros = 0;
  var cantidadNumerosPares = 0;
  var promedioNegativos;
  var promedioPositivos;
  var diferenciaNegativosPositivos;
  var respuesta="si";

	while(respuesta != "no"){
    numeroIngresado = prompt("Ingrese un numero ");
    numeroIngresado = parseInt(numeroIngresado);
    while (isNaN(numeroIngresado)){
        numeroIngresado = prompt("Lo que ingresaste no era un numero");
        numeroIngresado = parseInt(numeroIngresado);
      }
  if (numeroIngresado > 0){
    //es postivio
    acumuladorPositivo = acumuladorPositivo + numeroIngresado;
    cantidadPositivo ++;
    var resto = numeroIngresado % 2;
    if (resto == 0){
      // es un numero par
      cantidadNumerosPares++;
    }
  }else if(numeroIngresado < 0){
    // es negativo
    acumuladorNegativo = acumuladorNegatvo + numeroIngresado;
    cantidadNegativos ++;
  }else{
    cantidadCeros ++;
  }
   contador ++;
   respuesta = prompt("Desesa continuar? Si desea continuar escriba 'si'");

}//termina el bucle

promedioNegativos = acumuladorNegativos / cantidadNegativos;
promedioPositivos = acumuladorPositivos / cantidadPositivos;
diferenciaNegativosPositivos = promedioPositivos - promedioNegativos;

document.write("El total de numeros positivos es de: " + acumuladorPositivos + "\n" +
               "El total de numeros negativos es de: " + acumuladorNegativos + "\n" +
               "El promedio de numeros negativos es de: " + promedioNegativos + "\n" +
               "El promedio de numeros positivos es de: " + promedioPositivos + "\n" +
               "La cantidad de ceros es de: " + cantidadCeros + "\n" +
               " La diferencia entre Nº positivos y negastivos es de: " + diferenciaNegativosPositivos);




}//FIN DE LA FUNCIÓN
