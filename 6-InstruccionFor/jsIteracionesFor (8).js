function mostrar()
{
var numeroIngresado;
var acumuladorPrimo = 0;

numeroIngresado = parseInt(prompt("Ingrese numero."));



for(var i = 0; i <= numeroIngresado; i ++){
    if (numeroIngresado %  i == 0){
        acumuladorPrimo ++;
        console.log("Su numero es PRIMO.");
        console.log(i);
        
    }
 }if (acumuladorPrimo > 0){

    console.log("Es primo porque se divide por si mismo y el uno: " + acumuladorPrimo);
 }


}//FIN DE LA FUNCIÓN