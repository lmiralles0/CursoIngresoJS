function mostrar()
{
    var contador = 0;
    var ingresoKilos;
    var ingresoSabor;
    var acumuladorKilos = 0;
    var promedioKT;
    var flag =0;
    var kilosBajo;
    var saborBajo;
    var contadorCarne = 0;
    var promedioKCarne = 0;
    var acumuladorKCarne = 0;


    do {
        
        ingresoSabor = prompt("Ingrese sabor: carne o vegetal o pollo");
        while(ingresoSabor !== "carne" && ingresoSabor !== "vegetal" && ingresoSabor !=="pollo"){
            ingresoSabor = prompt("Error. Ingrese sabor: carne o vegetal o pollo");
        }
        ingresoKilos = parseInt(prompt("Ingrese el kilage de la bolsa (entre 0 y 500)."));
        while((isNaN(ingresoKilos)) || ingresoKilos < 0 || ingresoKilos > 500){
            ingresoKilos = parseInt(prompt("Error. Ingrese el kilage de la bolsa (entre 0 y 500)."));
        }
        contador ++;
        console.log(contador);
        acumuladorKilos += ingresoKilos;

        if (flag == 0 || kilosBajo > ingresoKilos){
            kilosBajo = ingresoKilos;
            saborBajo = ingresoSabor;
            flag = 1;
        } 
        if (ingresoSabor == "carne"){
            contadorCarne ++;
            acumuladorKCarne += ingresoKilos
        }
    }while (contador < 5){

    }
promedioKCarne = acumuladorKCarne/contadorCarne;
promedioKT = acumuladorKilos / contador;

alert("a) El promedio de los kilos totales es " + promedioKT + "." 
    + "\nb) El mas liviano es " + kilosBajo + " y su sabor es " + saborBajo + "." 
    + "\nc) La cantidad de sabor a carne es " + contadorCarne + " y el promedio de kilos sabor a carne es " + promedioKCarne + ".");

    
}
/*Bienvenidos.
el ingreso de 10 bolsas de alimento por prompt,
con los kilos (validar entre 0 y 500) , sabor validar(carne vegetales pollo) e informar por alert:
a) El promedio de los kilos totales.
b) El mas liviano y su sabor
c) La cantidad de sabor carne y el promedio de kilos de sabor carne*/