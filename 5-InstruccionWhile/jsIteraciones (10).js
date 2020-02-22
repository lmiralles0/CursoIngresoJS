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
                   acumuladorPositivos = acumuladorPositivos + numeroIngresado;
                   cantidadPositivos ++;
                   var resto = numeroIngresado % 2;
                   if (resto == 0){
                          // es un numero par
                           cantidadNumerosPares++;
                   }
                  console.log("Numero ingresado: " + numeroIngresado);  

          }else if (numeroIngresado < 0){
                  // es negativo
                  acumuladorNegativos = acumuladorNegativos + numeroIngresado;
                  cantidadNegativos ++;
          }else{
                  cantidadCeros ++;
          }


          contador ++;
          respuesta = prompt("Desesa continuar? Si desea continuar escriba 'no'");

}//termina el bucle


//Se calculan los promedio

promedioNegativos = acumuladorNegativos / cantidadNegativos;
promedioPositivos = acumuladorPositivos / cantidadPositivos;
diferenciaNegativosPositivos = promedioPositivos - promedioNegativos;

document.write("El total de numeros positivos es de: " + acumuladorPositivos + "<br>" +
               "El total de numeros negativos es de: " + acumuladorNegativos + "<br>" +
               "El promedio de numeros negativos es de: " + promedioNegativos + "<br>" +
               "El promedio de numeros positivos es de: " + promedioPositivos + "<br>" +
               "La cantidad de ceros es de: " + cantidadCeros + "<br>" +
               " La diferencia entre Nº positivos y negastivos es de: " + diferenciaNegativosPositivos);



//si en documentwrite se imprime "\n" se imprime uno al lado del otro 
//para poner uno debajo del otro "<br>"
}//FIN DE LA FUNCIÓN
