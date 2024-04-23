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

  document.addEventListener("DOMContentLoaded", function() {
      // Carrusel 1
    const slider1 = document.querySelector("#textito .items");
    const slides1 = document.querySelectorAll("#textito .item");
    const button1 = document.querySelectorAll("#textito .button");
  
    let current1 = 0;
    let prev1 = 4;
    let next1 = 1;
  
    for (let i = 0; i < button1.length; i++) {
      button1[i].addEventListener("click", () => i == 0 ? gotoPrev1() : gotoNext1());
    }
  
    const gotoPrev1 = () => current1 > 0 ? gotoNum1(current1 - 1) : gotoNum1(slides1.length - 1);
  
    const gotoNext1 = () => current1 < 4 ? gotoNum1(current1 + 1) : gotoNum1(0);
  
    const gotoNum1 = number => {
      current1 = number;
      prev1 = current1 - 1;
      next1 = current1 + 1;
  
      for (let i = 0; i < slides1.length; i++) {
        slides1[i].classList.remove("active");
        slides1[i].classList.remove("prev");
        slides1[i].classList.remove("next");
      }
  
      if (next1 == 5) {
        next1 = 0;
      }
  
      if (prev1 == -1) {
        prev1 = 4;
      }
  
      slides1[current1].classList.add("active");
      slides1[prev1].classList.add("prev");
      slides1[next1].classList.add("next");
    }
  
    // Carrusel 2
    const slider2 = document.querySelector("#text2 .items");
    const slides2 = document.querySelectorAll("#text2 .item");
    const button2 = document.querySelectorAll("#text2 .button");
  
    let current2 = 0;
    let prev2 = 10;
    let next2 = 1;
  
    for (let i = 0; i < button2.length; i++) {
      button2[i].addEventListener("click", () => i == 0 ? gotoPrev2() : gotoNext2());
    }
  
    const gotoPrev2 = () => current2 > 0 ? gotoNum2(current2 - 1) : gotoNum2(slides2.length - 1);
  
    const gotoNext2 = () => current2 < 10 ? gotoNum2(current2 + 1) : gotoNum2(0);
  
    const gotoNum2 = number => {
      current2 = number;
      prev2 = current2 - 1;
      next2 = current2 + 1;
  
      for (let i = 0; i < slides2.length; i++) {
        slides2[i].classList.remove("active");
        slides2[i].classList.remove("prev");
        slides2[i].classList.remove("next");
      }
  
      if (next2 == 11) {
        next2 = 0;
      }
  
      if (prev2 == -1) {
        prev2 = 10;
      }
  
      slides2[current2].classList.add("active");
      slides2[prev2].classList.add("prev");
      slides2[next2].classList.add("next");
    }
  
    // Carrusel 3
    const slider3 = document.querySelector("#text3 .items");
    const slides3 = document.querySelectorAll("#text3 .item");
    const button3 = document.querySelectorAll("#text3 .button");
  
    let current3 = 0;
    let prev3 = 4;
    let next3 = 1;
  
    for (let i = 0; i < button3.length; i++) {
      button3[i].addEventListener("click", () => i == 0 ? gotoPrev3() : gotoNext3());
    }
  
    const gotoPrev3 = () => current3 > 0 ? gotoNum3(current3 - 1) : gotoNum3(slides3.length - 1);
  
    const gotoNext3 = () => current3 < 4 ? gotoNum3(current3 + 1) : gotoNum3(0);
  
    const gotoNum3 = number => {
      current3 = number;
      prev3 = current3 - 1;
      next3 = current3 + 1;
  
      for (let i = 0; i < slides3.length; i++) {
        slides3[i].classList.remove("active");
        slides3[i].classList.remove("prev");
        slides3[i].classList.remove("next");
      }
  
      if (next3 == 5) {
        next3 = 0;
      }
  
      if (prev3 == -1) {
        prev3 = 4;
      }
  
      slides3[current3].classList.add("active");
      slides3[prev3].classList.add("prev");
      slides3[next3].classList.add("next");
    }
  });
  function showOverlay(image) {
    // Ocultar la imagen original
    image.style.display = "none";
    // Obtener la imagen de la capa de superposición
    var overlayImage = image.nextElementSibling;
    // Mostrar la imagen de la capa de superposición
    overlayImage.style.display = "block";
  }
  function hideOverlay(overlayImage) {
    // Ocultar la imagen de la capa de superposición
    overlayImage.style.display = "none";
    // Mostrar la imagen original
    var originalImage = overlayImage.previousElementSibling;
    originalImage.style.display = "block";
  }