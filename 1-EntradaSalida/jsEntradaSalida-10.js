/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var precio;
    var descuento;
    var resultado;

    precio = parseFloat(document.getElementById("importe").value);
    descuento = parseFloat(precio * 25 / 100);
    resultado = (precio - descuento);
    document.getElementById("resultado").value = resultado; 
}
