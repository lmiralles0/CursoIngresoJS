function mostrar(){
  var numero;
  var contadorDivisores = 0;

  numero = parseInt(prompt("Ingrese un numero : "));

  for (i = 1; i <= numero; i++){
    if(numero % 1 == 0){
      console.log(numero);
      contadorDivisores++;

    }
  console.log(contadorDivisores);
  }




}//FIN DE LA FUNCIÓN
