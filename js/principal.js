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

var botaoAdd = document.querySelector("#adicionar-paciente"); // selecionando id 
botaoAdd.addEventListener("click", function(event){      // adicionando escutador de eventos e criando função anonima preventDefalut
    event.preventDefault();

    var form = document.querySelector("#form-adiciona"); // selecionando o form

    var nome = form.nome.value; // pegando os dados do form
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr"); //criando uma tr
    
    var nomeTd = document.createElement("td"); // criando td
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome; //preenchendo as td's com os valores que peguei do form ali em cima(.value)
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = imc;

    pacienteTr.appendChild(nomeTd); //colocando as td's dentro da tr
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr); // trazendo a tabela criada para a tabela já existente na página

});
