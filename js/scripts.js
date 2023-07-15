var numeroSecreto = parseInt(Math.random() * 11);
var numeroTentativas;
var tentativa = 0;
var numerosTentados = [];

function configurarNivel () {
    var nivelSelecionado = document.getElementById("nivel").value;

    if (nivelSelecionado === "facil") {
        numeroTentativas = 5;
    } else if (nivelSelecionado === "medio") {
        numeroTentativas  = 3;
    } else if (nivelSelecionado === "dificil") {
        numeroTentativas = 1;
    }

    document.getElementById("select-container").style.display = "none";
    document.getElementById("jogo-container").style.display = "block";
    document.getElementById("instrucoes").textContent = "Você tem " + numeroTentativas + " tentativa(s) para descobrir um número secreto entre 0 a 10."
    document.getElementById("chutar").value = "";
    document.getElementById("chutar").disabled = false;
}

function Chutar() {
    var resultado = document.getElementById("resultado");
    var chute = parseInt(document.getElementById("valor").value);

    if (chute === 383810) {
        resultado.innerHTML = "Oi bebê!"
        disableInputs();
        exibirBotaoReiniciar();
        return;
    }

    if (chute === 50135) {
        resultado.innerHTML = "Perai"
        disableInputs();
        exibirBotaoReiniciar();
        return;
    }

    if (isNaN(chute)) {
        resultado.innerHTML = "Por favor, digite um número!";
        return;
    }

    if (numerosTentados.includes(chute)) {
        resultado.innerHTML = "Você já tentou esse número.<br>Tente novamente com um número diferente!";
        return;
    }
    
    numerosTentados.push(chute);    
    
    if (chute == numeroSecreto) {
        resultado.innerHTML = " Você acertou!";
        disableInputs();
        exibirBotaoReiniciar();
    } else if (chute > 10 || chute < 0) {
        resultado.innerHTML = "Lembre-se que precisa ser um número de 0 a 10!";
    } else {
        tentativa++;
        if (tentativa === numeroTentativas) {
            resultado.innerHTML = "Suas tentativas acabaram. <br>O número correto era: " + numeroSecreto;
            disableInputs();
            exibirBotaoReiniciar();
        } else {
            if (chute > numeroSecreto) {
                resultado.innerHTML = "Você errou! <br>Tentativa " + tentativa + " de " + numeroTentativas + ".<br>O número secreto é menor!";
            } else {
                resultado.innerHTML = "Você errou! <br>Tentativa " + tentativa + " de " + numeroTentativas + ".<br>O número secreto é maior!";
            }
        }
    }
}
    
function disableInputs() {
    document.getElementById("valor").disabled = true;
    document.getElementById("chutar").disabled = true;
}

function exibirBotaoReiniciar() {
    document.getElementById("reiniciar").style.display = "";
}

function reiniciarJogo() {
    location.reload();
}