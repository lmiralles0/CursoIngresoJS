function mostrar()
{
//tomo la edad
var edad;
var estadoCivil;

edad = parseInt(document.getElementById("edad").value);
estadoCivil = document.getElementById("estadoCivil").value;

if (edad >= 18 && !(estadoCivil != "Soltero")){//positivo (estadocivil =="Soltero" && edad >=18)
  alert("'Es soltero y no es menor.'");
 }

}//FIN DE LA FUNCIÓN
