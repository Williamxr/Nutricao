var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
   
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");     //qual requisição vai fazer e para onde

    xhr.addEventListener("load", function(){
        
    });

    xhr.send();

});