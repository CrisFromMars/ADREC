// Boton Lista/Mostrar *****************
$(document).ready(function() {
  var help = 'AYUDA AL USUARIO <br> <br>'+
            'n es el numero total de ensayos, es un numero entero positivo.'+
            '</br></br></br>x1 es el numero de especifico del ensayo 1 a realizar. De igual manera es numero entero y debe ser menor o igual a n.'+
            '</br></br></br>x2 es el numero de especifico del ensayo 2 a realizar. De igual manera es numero entero y debe ser menor o igual a n.'+
            '</br></br></br>x3 es el numero de especifico del ensayo 3 a realizar. De igual manera es numero entero y debe ser menor o igual a n.'+
            '</br></br></br>p1 es la probabilidad de exito del ensayo 1. Valor entre 0 y 1'+
            '</br></br></br>p2 es la probabilidad de exito del ensayo 2. Valor entre 0 y 1'+
            '</br></br></br>p3 es la probabilidad de exito del ensayo 3. Valor entre 0 y 1';

    $("#ayuda").click(function() {
      $("#contenido").html(help);
    });
});
