/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
// Tambien se puede poner:
// var nombre
// alert(prompt("Ingrese su nombre"));
// notese que si se borra la "function mostar" aparece el cuadro de entrada
function mostrar()
{
    var nombre
    var numeroo         

    nombre = prompt("Ingrese su nombre");
    numeroo = parseInt(nombre);
    
    if (nombre == numeroo){
        alert("Ingreso numeros, por favor ingrese texto.");
    } else {
        alert(nombre);
        
    }

    
}

