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
    imcTd.textContent = calculaImc(peso, altura);

    pacienteTr.appendChild(nomeTd); //colocando as td's dentro da tr
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr); // trazendo a tabela criada para a tabela já existente na página

});