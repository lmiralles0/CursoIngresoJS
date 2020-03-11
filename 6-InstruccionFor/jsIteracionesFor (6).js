function mostrar()
{
    var numeroIngresado;
    var contadorPares = 0;


    numeroIngresado = parseInt(prompt("Ingrese numero."));

    for (var i = 1; i <= numeroIngresado; i ++){
     if (i % 2 == 0){
         contadorPares ++;
         console.log(i);
         
     }
   }console.log("Cantidad de Nº pares " + contadorPares + ".");




}//FIN DE LA FUNCIÓN
//. mostrar los numeros pares desde el 1 al número ingresado, y mostrar la cantidad de numeros pares encontrados.

