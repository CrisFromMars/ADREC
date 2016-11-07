$(document).ready(function() {

    $('#calcularBN').click(function(){

        console.log("Hola :v");
        var n=parseInt($('#n').val());
        var k=parseInt($('#k').val());
        var p=parseFloat($('#p').val());

        if(p>1)
        {
          alert("'p' debe ser un número entre 0 y 1");
        }
        else if(k>n)
        {
          alert("'k' debe ser menor que 'n'");
        }
        else
        {
          var a=n-1;
          var b=k-1;

        //(n-1)!
          var z=1;
          for(var i=a; i>=1; i--)
          {
            z=z*i;
          }

        //(k-1)!
          var t=1;
          for(var j=b; j>=1; j--)
          {
            t=t*j;
          }

        //((n-1)-(k-1))!
          var x=a-b;
          var s=1;
          for(hj=x; hj>=1; hj--)
          {
            s=s*hj;
          }

          var c=z/s;

        //((n-1)!/((n-1)-(k-1))!)/(k-1)! = d ; p^k = e ; 1-p=f  ; n-k=g
          var d=c/t;
          var e=Math.pow(p,k);
          var f=1-p;
          var g=n-k;
          var h=Math.pow(f,g);
          var res=d*e*h;
          $('#result1').val(Math.round((res)*100000)/100000);
        }

    });

    $('#infoN').click(function(){
            document.getElementById("textN").innerHTML = "n es el numero (entero y positivo) total de ensayos.";
        });

    $('#infoK').click(function(){
            document.getElementById("textK").innerHTML = "k es el numero (entero y positivo) de ensayos a realizar. Tiene que ser menor o igual a n.";
        });

    $('#infoP').click(function(){
            document.getElementById("textP").innerHTML = "p es la probabilidad de exito. Debe ser una cantidad entre 0 y 1.";
        });

});
