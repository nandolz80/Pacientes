var titulo = document.querySelector('.titulo');
titulo.textContent = "Fernando Nutricionista";

function calculaIMC(peso, altura) {
    
    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEhValida) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }
    
    
}

function validaPeso(peso){
    if (peso >= 0 && peso <= 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura){
    if (altura >= 0 && altura <= 3.0) {
        return true;
    } else {
        return false;
    }
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener('click', function(event){
    event.preventDefault();
    var form = document.querySelector('#adiciona');
    var paciente = pacienteForm(form);    
    var pacienteTr = buildTr(paciente);

    function validaPaciente(paciente) {
        if (validaPeso(paciente.peso)) {
            return true;
        } else {
            return false;
        }
    }

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

    form.reset();

})

function validaPaciente(paciente) {
    if (validaPeso(paciente.peso)) {
        return true;
    } else {
        return false;
    }
}

function pacienteForm(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaIMC(form.peso.value,form.altura.value)
    }
    return paciente;
}

function buildTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add('paciente');

    pacienteTr.appendChild(buildTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(buildTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(buildTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(buildTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(buildTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function buildTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}