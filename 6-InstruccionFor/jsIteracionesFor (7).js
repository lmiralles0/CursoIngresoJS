function mostrar(){
  var numeroIngresado;
  var contadorDivisores = 0;

  numeroIngresado = parseInt(prompt("Ingrese un numero."));

  for (i = 0; i <= numeroIngresado; i++){
    if(numeroIngresado % i == 0){
      contadorDivisores ++;
      console.log(i);
      

    }
  
  }console.log("La cantidad de Nº divisores es :" + contadorDivisores + ".");




}//FIN DE LA FUNCIÓN
//mostrar los numeros divisores desde el 1 al número ingresado, y mostrar la cantidad de numeros divisores encontrados.