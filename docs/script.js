var a = 0;
function ver_contactos() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("contactos").innerHTML =
      this.responseText;
    }
    xhttp.open("GET", "contact.html");
    xhttp.send();
  }


//JQuery

$(document).ready(function(){
    $("#esconder").click(function(){
        $("h4").fadeToggle();
        document.getElementById("esconder").innerHTML= "<h1>Mostrar</h1>"
        
    });
  });

  $(this).css('background-color', 'red');