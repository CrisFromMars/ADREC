$(document).ready(function() {

    $('#calcularB').click(function(){
                console.log(n);
              	var n=parseInt(document.getElementById("n").value);
              	var r=parseInt(document.getElementById("r").value);
              	var p=parseFloat(document.getElementById("p").value);
              	if(p<0||p>1){alert("'p' debe ser un número entre 0 y 1");return;}
              	if(r>n){alert("'x' debe ser menor o igual a 'n' ");return;}
                if((document.getElementById("n").value.length)==0){alert("'n' no debe estar en blanco");return;}
                if((document.getElementById("r").value.length)==0){alert("'x' no debe estar en blanco");return;}
                if((document.getElementById("p").value.length)==0){alert("'p' no debe estar en blanco");return;}
                if(n<=0){alert("'n' debe ser un número mayor a 0");return;}
                if(r<0){alert("'x' debe un numero mayor a 0 ");return;}
              	var nf=1;
              	var rf=1;
              	var nrf=1;
              	for(var k=r;k>=1;k--){
              		rf=rf*k;
              	}
              	for(var i=n;i>=1;i--){
              			nf=nf*i;
              	}

              	for(var j=(n-r);j>=1;j--){
              		nrf=nrf*j;
              	}
              	var npr=nf/nrf;
              	var ncr=npr/rf;
              	var des=ncr*Math.pow(p,r)*Math.pow((1-p),(n-r));

                if(isNaN(des)){alert("Por favor no ingreses caracteres especiales o letras en los campos.");return;}

              	document.getElementById("result1").value=Math.round(des*10000)/10000;
              });

      $('#infoN').click(function(){
              document.getElementById("textN").innerHTML = "n es el numero (entero y positivo) total de ensayos.";
          });

      $('#infoX').click(function(){
              document.getElementById("textX").innerHTML = "x es el numero (entero y positivo) de ensayos a realizar. Tiene que ser menor o igual a n.";
          });

      $('#infoP').click(function(){
              document.getElementById("textP").innerHTML = "p es la probabilidad de exito. Debe ser una cantidad entre 0 y 1.";
          });
});
