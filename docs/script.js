function contactos() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("contacto").innerHTML =
    this.responseText;
  }
  xhttp.open("GET", "contacto.html");
  xhttp.send();
}

$(document).ready(function(){
  $("button").click(function(){
    $(this).hide();
  });
});