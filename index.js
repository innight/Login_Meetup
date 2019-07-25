/* YOUR CODE GOES HERE! */

let vusername="";
let vpassword=""
document.getElementById("login-button").addEventListener("click", function(e){
    vusername = document.getElementById("UsernameText").value;
    vpassword = document.getElementById("PasswordText").value;
    if(vusername.length>=4 && vpassword.length >=8)
    {
        document.getElementsByClassName("form")[0].style.display = "none";
        e.preventDefault();
    }
    else
    {
        var x = document.getElementsByClassName("error")[0];
        x.textContent="Introduza Outra vez os dados";
        e.preventDefault();
    }
  });