$(document).ready(function(){
  $(window).load(function() {
  	$(".loader").fadeOut("slow");
  });

  $("#ir").click(function() {
    var nombre = $("#name").val();
    var longitud = nombre.length;
    if (longitud==0)
    {
      alert("Por favor ingresa un nombre de usuario");
      return;
    }
    $("#distribuciones").html('<b>Bienvenido, '+nombre+'!</b></br><a href="DistribucionB.html"><button id="ventanaGenero">D.Binominal</button></a>'+
    '   <a href="DistribucionM.html"><button id="ventanaConsoles">D.Multinomial</button></a></br></br>'+
    '<a href="DistribucionBN.html"><button id="ventanaVideogames">D.Binomial Negativa</button></a>'+
    '   <a href="DistribucionP.html"><button id="ventanaSales">D.Poisson</button></br></br></a>'+
    '</br>');
  });
});
