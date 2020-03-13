function mostrar()
{
    var alturas;
    var sexo;
    var contador = 0;
    var flag = 0;
    var promedioAl;
    var acumuladorAl = 0;
    var alturaBaja;
    var sexoBajo;
    var contadorMujerAlta = 0;

    while(contador <5){
    alturas = parseFloat(prompt("Ingrese alturas en metros."));
    alturas = alturas * 100;
    while (isNaN(alturas) || alturas < 160 || alturas > 250){
        alturas = parseFloat(prompt("Error. Ingrese alturas en metros."));
        alturas = alturas * 100;
    }
    sexo = prompt("Ingrese sexo 'f' o 'm'.");
    while(sexo !== "f" && sexo !=="m"){
        sexo = prompt("Error. Ingrese sexo 'f' o 'm'.");
    }
    contador ++;
    console.log(contador);
    acumuladorAl += alturas;
    if (flag == 0){
      alturaBaja = alturas;
      sexoBajo = sexo;
      flag = 1;  
    }else if (alturaBaja > alturas){
        alturaBaja = alturas;
        sexoBajo = sexo;
    } if (alturas > 190 && sexo == "f"){
        contadorMujerAlta ++;
    }
  }
 promedioAl = acumuladorAl/contador;
 alert("a) El promedio de alturas totales es " + promedioAl + "." 
     + "\nb) La altura mas baja es " + alturaBaja + " y su sexo es " + sexoBajo + "."
     + "\nc) La cantidad de mujeres que superan los 190 cm es de " + contadorMujerAlta + ".");
}
/*Realizar el algoritmo que permita el ingreso por prompt 
de las alturas en centimetros(validar entre 0 y 250) , el sexo. (validar el sexo “f” o “m”) de 5 jugadores
 de básquet, informar por alert:
a) El promedio de las alturas totales.
b) La altura más baja y el sexo de esa persona.
c) La cantidad de muheres que su altura supere los 190 centimetros.*/