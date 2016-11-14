// Boton Lista/Mostrar *****************
$(document).ready(function() {

    $("#n,#x1,#x2,#x3,#p1,#p2,#p3").keyup(function(event){
      if(event.keyCode == 13){
        $("#calculaM").click();
      }
    });

    $('#calculaM').click(function(){
            console.log(n);
            //declaraciones
            var n=parseInt(document.getElementById("n").value);
            var x1=parseInt(document.getElementById("x1").value);
            var x2=parseInt(document.getElementById("x2").value);
            var x3=parseInt(document.getElementById("x3").value);
            var p1=parseFloat(document.getElementById("p1").value);
            var p2=parseFloat(document.getElementById("p2").value);
            var p3=parseFloat(document.getElementById("p3").value);
            var totalp = p1+p2+p3;

            //validaciones
            if(n<=0){alert("'n' debe ser un número mayor a 0");return;}
            if(p1<0||p1>1){alert("'p1' debe ser un número entre 0 y 1");return;}
            if(p2<0||p2>1){alert("'p2' debe ser un número entre 0 y 1");return;}
            if(p3<0||p3>1){alert("'p3' debe ser un número entre 0 y 1");return;}
            if(x1>n){alert("'x1' debe ser menor o igual a 'n' ");return;}
            if(x2>n){alert("'x2' debe ser menor o igual a 'n' ");return;}
            if(x3>n){alert("'x3' debe ser menor o igual a 'n' ");return;}
            if(totalp>1){alert("La suma de las probabilidades no debe pasar de 1"); return;}
            if((document.getElementById("n").value.length)==0){alert("'n' no debe estar en blanco");return;}
            if((document.getElementById("p1").value.length)==0){alert("'p1' no debe estar en blanco");return;}
            if((document.getElementById("p2").value.length)==0){alert("'p2' no debe estar en blanco");return;}
            if((document.getElementById("p3").value.length)==0){alert("'p3' no debe estar en blanco");return;}
            if((document.getElementById("x1").value.length)==0){alert("'x1' no debe estar en blanco");return;}
            if((document.getElementById("x2").value.length)==0){alert("'x2' no debe estar en blanco");return;}
            if((document.getElementById("x3").value.length)==0){alert("'x3' no debe estar en blanco");return;}

            //operaciones
            var nf=1;
            var x1f=1;
            var x2f=1;
            var x3f=1;
            //var nrf=1;
            for(var k=x1;k>=1;k--){
              x1f=x1f*k;
            }
            console.log(x1f);
            for(var k=x2;k>=1;k--){
              x2f=x2f*k;
            }
            console.log(x2f);
            for(var k=x3;k>=1;k--){
              x3f=x3f*k;
            }
            console.log(x3f);
            for(var i=n;i>=1;i--){
                nf=nf*i;
            }
            console.log(nf);
            var division=(nf/(x1f*x2f*x3f));
            var resultado=division*Math.pow(p1,x1)*Math.pow(p2,x2)*Math.pow(p3,x3);

            if(isNaN(resultado)){alert("Por favor no ingreses caracteres especiales o letras en los campos.");return;}

            document.getElementById("result1").value=Math.round(resultado*10000)/10000;
        });

    $('#infoN').click(function(){
            document.getElementById("textN").innerHTML = "n es el numero (entero y positivo) total de ensayos.";
        });

    $('#infoX1').click(function(){
            document.getElementById("textX1").innerHTML = "x1 es el numero especifico (entero y positivo) del ensayo 1 a realizar. Tiene que ser menor o igual a n.";
        });

    $('#infoX2').click(function(){
            document.getElementById("textX2").innerHTML = "x2 es el numero especifico (entero y positivo) del ensayo 2 a realizar. Tiene que ser menor o igual a n.";
        });

    $('#infoX3').click(function(){
            document.getElementById("textX3").innerHTML = "x3 es el numero especifico (entero y positivo) del ensayo 3 a realizar. Tiene que ser menor o igual a n.";
        });

    $('#infoP1').click(function(){
            document.getElementById("textP1").innerHTML = "p1 es la probabilidad de exito del ensayo 1. Valor entre 0 y 1";
        });

    $('#infoP2').click(function(){
            document.getElementById("textP2").innerHTML = "p2 es la probabilidad de exito del ensayo 2. Valor entre 0 y 1";
        });

    $('#infoP3').click(function(){
            document.getElementById("textP3").innerHTML = "p3 es la probabilidad de exito del ensayo 3. Valor entre 0 y 1";
        });
});
