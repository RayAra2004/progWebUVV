const email = document.getElementById("email")
const senha = document.getElementById("password")
const btnFechar = document.getElementById("btnFechar")

document.getElementById("login").addEventListener("submit", function(e){
    e.preventDefault();
    if(email.value === "adm@uvv.br" && senha.value === "ADM#123"){
        window.open("home.html","_self");
       
    }
});

document.getElementById("btnFechar").addEventListener("click", function(e){
    var tab = window.open(window.location,"_self");
    tab.close();
});
