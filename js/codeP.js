// Boton Lista/Mostrar *****************
$(document).ready(function() {

  var help = 'AYUDA AL USUARIO <br> <br>'+
            'x es el numero de ocurrencias en un intervalo de tiempo, es un numero entero positivo.'+
            '</br></br></br>lambda es el promedio de ocurrencias por intervalo. Valor entero positivo.'+
            '</br></br></br>t es el intervalo de tiempo. Valor entero positivo';

  $("#ayuda").click(function() {
    $("#contenido").html(help);
  });
});
