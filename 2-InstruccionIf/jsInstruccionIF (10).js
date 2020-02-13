function mostrar()
{
	//Genero el número RANDOM entre 1 y 10
  var random;
  
  random = Math.floor(Math.random()*11)
  
  if (random == 9 || random == 10){
    console.log("EXCELENTE " + random);
  }
  else if (random >= 4 && random < 9){
    console.log("APROBÓ " + random);
  }
  else if (random < 4){
    console.log("Vamos, la proxima se puede " + random);
  }
}//FIN DE LA FUNCIÓN
//nota mental la variable en este caso ramdon debe de ir pegada al numero que se le asigna sino no funciona