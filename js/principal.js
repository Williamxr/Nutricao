var titulo = document.querySelector(".titulo"); // Como selecionar uma classe para mudar seu nome.
titulo.textContent = "Nutricionista Willx"      //Pegando o texto da var(titulo) e alterando seu nome.

var paciente = document.querySelector("#primeiro-paciente"); //pega a tr toda

var tdPeso = paciente.querySelector(".info-peso"); // pega a td toda
var peso = tdPeso.textContent; //pegando só o valor do peso do paciente

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");


var imc = peso / (altura * altura); //calculando o imc

tdImc.textContent = imc; //exibindo o resultado do imc calculado