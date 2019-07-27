/* YOUR CODE GOES HERE! */

let vusername="";
let vpassword=""
document.getElementById("login-button").addEventListener("click", function(e){
    vusername = document.getElementById("UsernameText").value;
    vpassword = document.getElementById("PasswordText").value;

    var resultadoUsername = escapeRegExpUsername(vusername);
    var resultadoPassword = escapeRegExpPassword(vpassword);

    if(resultadoUsername != null && resultadoPassword != null)
    {
        document.getElementsByClassName("form")[0].style.display = "none";
        var x = document.getElementsByClassName("error")[0];
        x.textContent="";
        e.preventDefault();
    }
    else
    {
        var x = document.getElementsByClassName("error")[0];
        x.textContent="Introduza Outra vez os dados teste!!!";
        e.preventDefault();
    }
  });

  function escapeRegExpUsername(string) {

    var regexUsername = /^[A-Z0-99]{4,}$/gi;
    return regexUsername.exec(string);
  } 

  function escapeRegExpPassword(string) {
      var regexPassword = /^[A-Z0-99]{8,}$/gi;
      return regexPassword.exec(string);
  } 