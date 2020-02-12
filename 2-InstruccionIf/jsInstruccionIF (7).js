function mostrar()
{
//tomo la edad
//Decalracion de variables
var edad;
var estadoCivil;

//Cargar variables
edad = parseInt(document.getElementById("edad").value);
estadoCivil = document.getElementById("estadoCivil").value;
console.log("Ver la edad " + edad);//puede ir warn en vez de console
console.log("Ver el estado civil " + estadoCivil);

if (edad <= 17 && estadoCivil != "Soltero"){//se puede negar, !(edad>=18 && estadoCivil == "Soltero")
  alert("'Es muy pequeño para NO ser soltero.'");
}



}//FIN DE LA FUNCIÓN
