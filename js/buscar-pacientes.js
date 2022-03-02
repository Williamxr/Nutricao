var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
   
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");     //qual requisição vai fazer e para onde

    xhr.addEventListener("load", function(){
        
        var erroAjax = document.querySelector("#erro-ajax");
        if(xhr.status == 200){
            
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(function(paciente){
                adicionaPacienteNaTabela(paciente);
            });

        }else{
            console.log(xhr.status);
            console.log(xrh.responseText);
            var erroAjax = document.querySelector("#erro-ajax");
            erroAjax.classList.remove("invisivel");

        }

    });

    xhr.send();

});