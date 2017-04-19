var contentBox = document.getElementById("content-box");

function creandoBoxs(){
  var divAmarillo = document.createElement("div");
  var divMorado = document.createElement("div");
  var divRojo = document.createElement("div");
  var divAzul = document.createElement("div");
  var divVerde = document.createElement("div");
  var divNegro = document.createElement("div");

  divAmarillo.setAttribute("class", "cajas");
  divAmarillo.setAttribute("id", "amarillo");
  divMorado.setAttribute("class", "cajas");
  divMorado.setAttribute("id", "morado");
  divRojo.setAttribute("class", "caja-padre");
  divRojo.setAttribute("id", "rojo");
  divAzul.setAttribute("class", "caja-padre");
  divAzul.setAttribute("id", "azul");
  divVerde.setAttribute("class", "cajas");
  divVerde.setAttribute("id", "verde");
  divNegro.setAttribute("class", "cajas");
  divNegro.setAttribute("id", "negro");

  contentBox.appendChild(divRojo);
  divRojo.appendChild(divMorado);
  divMorado.appendChild(divAmarillo);

  contentBox.appendChild(divAzul);
  divAzul.appendChild(divVerde);
  divAzul.appendChild(divNegro);
}

creandoBoxs();
