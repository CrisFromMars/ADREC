// Boton Lista/Mostrar *****************
$(document).ready(function() {

    $("#x,#lambda,#t").keyup(function(event){
  if(event.keyCode == 13){
      $("#calcularP").click();
  }
  });

  $('#calcularP').click(function(){
              var x=parseInt(document.getElementById("x").value);
              var lambda=parseInt(document.getElementById("lambda").value);
              var t=parseInt(document.getElementById("t").value);
              if(x<0){alert("'x' debe ser un número mayor a 0");return;}
              if(lambda<0){alert("'lambda' debe un numero mayor a 0 ");return;}
              if(t<0){alert("'t' debe ser un número mayor a 0");return;}
              if((document.getElementById("x").value.length)==0){alert("'x' no debe estar en blanco");return;}
              if((document.getElementById("lambda").value.length)==0){alert("'lambda' no debe estar en blanco");return;}
              if((document.getElementById("t").value.length)==0){alert("'t' no debe estar en blanco");return;}
              var xf=1;
              var e=2.718;
              var exponente = -1*lambda*t;

              for(var i=x;i>=1;i--){
                  xf=xf*i;
              }

              var res = (Math.pow(e,exponente)*Math.pow((lambda*t),x))/xf;

              if(isNaN(res)){alert("Por favor no ingreses caracteres especiales o letras en los campos.");return;}

              document.getElementById("result1").value=Math.round(res*10000)/10000;
            });

  $('#infoX').click(function(){
          document.getElementById("textX").innerHTML = "x es el numero (entero y positivo) de ocurrencias en un intervalo de tiempo.";
      });

  $('#infoL').click(function(){
          document.getElementById("textL").innerHTML = "lambda es el promedio de ocurrencias por intervalo.";
      });

  $('#infoT').click(function(){
          document.getElementById("textT").innerHTML = "t es el intervalo de espacio o tiempo. Valor entero positivo";
      });
});
