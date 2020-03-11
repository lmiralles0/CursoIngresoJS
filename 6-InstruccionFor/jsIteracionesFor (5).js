function mostrar()
{
    var numeroIngresar;

    numeroIngresar = parseInt(prompt("Ingresar numeros."));
     for (var i = 0; i <= numeroIngresar;){
         
        if(numeroIngresar !== 9){
            numeroIngresar = parseInt(prompt("Ingresar numeros."));
        }else if (numeroIngresar == 9) {
            console.log("Termino.");
            break;
            
         }
     console.log(i);

     }




}//FIN DE LA FUNCIÓN