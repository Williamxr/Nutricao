var botaoAdd = document.querySelector("#adicionar-paciente"); // selecionando id 
botaoAdd.addEventListener("click", function(event){      // adicionando escutador de eventos e criando função anonima preventDefalut
    event.preventDefault();

    var form = document.querySelector("#form-adiciona"); // selecionando o form

    var paciente = obtemPacienteDoForm(form);
    
    var pacienteTr = montaTr(paciente);
 
    var tabela = document.querySelector("#tabela-pacientes");

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
    pacienteTr.classList.add("paciente");

    var nomeTd = document.createElement("td"); // criando td
    nome.Td.classList.add("info-nome");
    var pesoTd = document.createElement("td");
    nome.Td.classList.add("info-peso");
    var alturaTd = document.createElement("td");
    nome.Td.classList.add("info-altura");
    var gorduraTd = document.createElement("td");
    nome.Td.classList.add("info-gordura");
    var imcTd = document.createElement("td");
    nome.Td.classList.add("info-imc");

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