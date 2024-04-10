function ClosePopUp(){
    var popUp = document.getElementById("popUp");
    popUp.style.display = "none";
}

//FAVORITOS


function cerrarFavart1() {
    document.getElementById('favart1').style.display = 'none';
}

function cerrarFavart2() {
    document.getElementById('favart2').style.display = 'none';
}

function cerrarFavart3() {
    document.getElementById('favart3').style.display = 'none';
}

function cerrarFavart4() {
    document.getElementById('favart4').style.display = 'none';
}



var canProducto1 = 1;
var canProducto2 = 1;
var canProducto3 = 1;
var canProducto4 = 1;

function restarCantidad(id) {
    var canProducto = obtenerCantidadProducto(id);
    canProducto = Math.max(1, canProducto - 1);
    actualizarCantidad(id, canProducto);
}

function sumarCantidad(id) {
    var canProducto = obtenerCantidadProducto(id);
    canProducto = Math.min(10, canProducto + 1);
    actualizarCantidad(id, canProducto);
}

function actualizarCantidad(id, cantidad) {
    document.getElementById('canProducto' + obtenerNumeroFavart(id)).innerText = cantidad;
}

function obtenerCantidadProducto(id) {
    return parseInt(document.getElementById('canProducto' + obtenerNumeroFavart(id)).innerText);
}

function cerrarFavart(id) {
    document.getElementById('favart' + obtenerNumeroFavart(id)).style.display = 'none';
}

function obtenerNumeroFavart(id) {
    // Extraer el número del final del ID (por ejemplo, "favart2" devuelve "2")
    return id.replace('favart', '');
}
        






//Menu
$(".menu").click(function() {
	$(".menu").toggleClass("active");
	$(".navbar-menu").toggleClass("active");
  });

  
