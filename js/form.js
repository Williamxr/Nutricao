var botaoAdd = document.querySelector("#adicionar-paciente"); // selecionando id 
botaoAdd.addEventListener("click", function(event){      // adicionando escutador de eventos e criando função anonima preventDefalut
    event.preventDefault();

    var form = document.querySelector("#form-adiciona"); // selecionando o form

    var paciente = obtemPacienteDoForm(form);
    
    var pacienteTr = montaTr(paciente);

    
    var tabela = document.querySelector("#tabela-pacientes");
    // trazendo a tabela criada para a tabela já existente na página

    tabela.appendChild(pacienteTr);

});

function obtemPacienteDoForm(form){
    
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente){

    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td"); // criando td
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = paciente.nome; //preenchendo as td's com os valores que peguei do form ali em cima(.value)
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = paciente.imc;

    pacienteTr.appendChild(nomeTd); //colocando as td's dentro da tr
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;

}