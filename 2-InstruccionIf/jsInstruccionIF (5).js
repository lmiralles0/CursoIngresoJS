function mostrar()
{
//tomo la edad  
var edad;

edad = parseInt(document.getElementById("edad").value);

if(edad > 17){
    alert("Usted NO es adolecente.");
} else if (edad < 13){
    alert("Usted NO es adolecente.");
}

}//FIN DE LA FUNCIÓN