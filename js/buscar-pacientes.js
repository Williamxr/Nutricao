var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
   
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");     //qual requisição vai fazer e para onde

    xhr.addEventListener("load", function(){
        
        if(xhr.status == 200){
                    
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta)

            pacientes.forEach(function(paciente){
                adicionaPacienteNaTabela(paciente);
            });

        }else{
            console.log(xhr.status);
            console.log(xrh.responseText);
        }

    });

    xhr.send();

});