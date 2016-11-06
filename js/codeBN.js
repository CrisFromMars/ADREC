// Boton Lista/Mostrar *****************
$(document).ready(function() {
  var help = 'AYUDA AL USUARIO <br> <br>'+
            'n es el numero total de ensayos, es un numero entero positivo.'+
            '</br></br></br>k es el numero de especifico de ensayos a realizar. De igual manera es numero entero y debe ser menor o igual a n.'+
            '</br></br></br>p es la probabilidad de exito. Debe ser una cantidad entre 0 y 1.'+
            '</br></br></br>q es la probabilidad de fracaso. Debe ser una cantidad entre 0 y 1. ';
  $("#ayuda").click(function() {
    $("#contenido").html(help);
  });

});
