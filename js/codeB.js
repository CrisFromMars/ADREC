$(document).ready(function() {

    var help = 'AYUDA AL USUARIO <br> <br>'+
              'n es el numero total de ensayos, es un numero entero positivo.'+
              '</br></br></br>k es el numero de especifico de ensayos a realizar. De igual manera es numero entero y debe ser menor o igual a n.'+
              '</br></br></br>p es la probabilidad de exito. Debe ser una cantidad entre 0 y 1.'+
              '</br></br></br>q es la probabilidad de fracaso. Debe ser una cantidad entre 0 y 1.';

    function nPk(ene, kha)
    {
      var ret = 1;
      if (kha == 0) return 1;
      else
      {
        if (kha < ene)
        {
          console.error("k es menor a n");
          return "Ingrese nuevamente los valores";
        }
        else
        {
          for(i=1; i<=kha; i++)
          {
            ret *= ene;
            ene--;
          }
        }
      }//fin else
      return ret;
    }

  function nCk(n, k)
  {
    if(k > n/2) k = n-k;
    var f = nPk(n, k);
    var g = factorial(k);
    var h = f/g;

    return Math.floor(h);
  }

  function factorial(x)
  {
    x = Math.floor(x);
    var ret = 1;
    if (x<0) {
     alert(x+" No es un numero factorial valido.")
    }
    //else if(x == 0){
      //    }
    else
    {
      while(x>0)
      {
        ret *= x;
        x--;
      }
     }//end else
    return ret;
 }

 function calcular(n1,n2,n3,n4)
 {
   var resultado = 0;

   resultado = nCk(n1,n2) * (n3^n2) * (n4^(n1-n2));

   return resultado;
 }

    // Boton ayuda ******************
    $("#ayuda").click(function() {
      $("#contenido").html(help);

    });

    $("#calculaB").click(function() {
      var n = $("#n").val();
      var k = $("#k").val();
      var p = $("#p").val();
      var q = $("#q").val();

      alert(nPk(n,k))
      //$('#resultados').text(calcular(n,k,p,q));
    });

});
