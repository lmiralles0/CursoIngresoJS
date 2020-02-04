/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
//se utiliza el "docume..."" para dar entrada
//alert se puede agregar una variable con un texto o paint
function mostrar()
{
    var nombre
    
    nombre = document.getElementById("elNombre").value;

    alert("Su nombre es " + nombre);
}


