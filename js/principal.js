var titulo = document.querySelector(".titulo"); // Como selecionar uma classe para mudar seu nome.
titulo.textContent = "Nutricionista Willx"      //Pegando o texto da var(titulo) e alterando seu nome.

var pacientes = document.querySelectorAll(".paciente"); //pega a tr toda

for(var i = 0; i < pacientes.length; i++){ //for para percorrer todos os pacientes

var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso"); // pega a td toda
    var peso = tdPeso.textContent; //pegando só o valor do peso do paciente

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoValido = true;
    var alturaValida = true;

    if(peso < 0 || peso >= 400){
        pesoValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    if(altura <= 0 || altura >= 3.00){
        alturaValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    if(alturaValida && pesoValido){
        var imc = peso / (altura * altura); //calculando o imc
        tdImc.textContent = imc.toFixed(2); //exibindo o resultado do imc calculado com duas casas decimais
    }
}

var botaoAdd = document.querySelector("#adicionar-paciente");
botaoAdd.addEventListener("click", function(event){
    event.preventDefault()
    console.log("daew");
})

