$(document).ready(function(){

  $("#name").keyup(function(event){
  if(event.keyCode == 13){
      $("#ir").click();
  }
  });

  $("#ir").click(function() {
    var nombre = $("#name").val();
    var longitud = nombre.length;
    if (longitud==0 || nombre.trim().length==0)
    {
      alert("Por favor ingresa un nombre de usuario");
      return;
    }


    $("#main").html('<br> <p id="pAdmin" align="center">Bienvenido, '+nombre+'<br><br><br><a href="DistribucionB.html"><button id="ventanaGenero">D.Binominal</button></a>'+
    '   <a href="DistribucionM.html"><button id="ventanaConsoles">D.Multinomial</button></a>'+
    '<a href="DistribucionBN.html"><button id="ventanaVideogames">D.Binomial Negativa</button></a>'+
    '   <a href="DistribucionP.html"><button id="ventanaSales">D.Poisson</button></a>'+
    '</p><br><br>');
  });
});
