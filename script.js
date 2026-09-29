const ventilador = document.getElementById("ventilador");

const botao = document.getElementById("botao");

const status = document.getElementById("status");

const botoes = document.querySelectorAll(".velocidade");

let velocidadeAtual = 1;

function mudarVelocidade(numero) {

    velocidadeAtual = numero;

    let tempo;

    if (numero === 1) {
        tempo = "1s";
    }
    else if (numero === 2) {
        tempo = "00.3s";
    }
    else if (numero === 3) {
        tempo = "00.08s";
    }

    ventilador
        .querySelector(".helices")
        .style.animationDuration = tempo;

    botoes.forEach(function (botao) {

        botao.classList.remove("selecionada");

    });

    botoes[numero - 1]
        .classList.add("selecionada");

    status.textContent =
        "Ligado - Velocidade " + numero;
}

botao.addEventListener("click", function () {

    if (ventilador.classList.contains("ligado")) {

        ventilador.classList.remove("ligado");

        botao.textContent = "Ligar";

        status.textContent = "Desligado";
    }

    else {

        ventilador.classList.add("ligado");

        botao.textContent = "Desligar";

        mudarVelocidade(velocidadeAtual);
    }

});

botoes.forEach(function (botaoVelocidade) {

    botaoVelocidade.addEventListener("click", function () {

        const numero =
            Number(this.dataset.velocidade);

        ventilador.classList.add("ligado");

        botao.textContent = "Desligar";

        mudarVelocidade(numero);

    });

});
