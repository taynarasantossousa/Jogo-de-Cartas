window.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
});

function setupEventListeners() {
    document.getElementById('btn-jogar').addEventListener('click', iniciarJogo);
    document.getElementById('btn-pausar').addEventListener('click', togglePause);
    document.getElementById('btn-proxima-rodada').addEventListener('click', sortearCartas);
}

let monteJogador = [];
let monteMaquina = [];
let cartaJogador;
let cartaMaquina;
let jogoPausado = false; 

// Funções de som
const somVitoria = document.getElementById('sound-win');
const somDerrota = document.getElementById('sound-lose');

function tocarSom(som) {
    som.currentTime = 0; 
    som.play();
}

function togglePause() {
    jogoPausado = !jogoPausado; 
    const overlay = document.getElementById('pause-overlay');
    const btnPausar = document.getElementById('btn-pausar');

    if (jogoPausado) {
        overlay.classList.remove('hidden');
        btnPausar.textContent = 'Retomar';
    } else {
        overlay.classList.add('hidden');
        btnPausar.textContent = 'Pausar';
    }
}

function iniciarJogo() {
    const btnJogar = document.getElementById('btn-jogar');
    const btnPausar = document.getElementById('btn-pausar');
    const btnProximaRodada = document.getElementById('btn-proxima-rodada');

    document.getElementById('resultado').textContent = "";
    
    // Embaralha o baralho e distribui as cartas
    let baralhoEmbaralhado = [...baralho].sort(() => Math.random() - 0.5);

    const metade = Math.ceil(baralhoEmbaralhado.length / 2);
    monteJogador = baralhoEmbaralhado.slice(0, metade);
    monteMaquina = baralhoEmbaralhado.slice(metade);

    btnJogar.disabled = true;
    btnPausar.disabled = false; 
    btnProximaRodada.disabled = false;

    sortearCartas();
    atualizarPlacar();
}

function atualizarPlacar() {
    document.getElementById('placar-jogador').textContent = `Jogador: ${monteJogador.length}`;
    document.getElementById('placar-maquina').textContent = `Máquina: ${monteMaquina.length}`;
}

function sortearCartas() {
    if (jogoPausado) return; 

    if (monteJogador.length === 0 || monteMaquina.length === 0) {
        fimDeJogo();
        return;
    }

    cartaJogador = monteJogador[0];
    cartaMaquina = monteMaquina[0];

    document.getElementById('resultado').textContent = "Escolha um atributo";
    document.getElementById('btn-proxima-rodada').disabled = true;

    exibirCarta(document.getElementById('carta-jogador'), cartaJogador, true);

    const cartaMaquinaEl = document.getElementById('carta-maquina');
    cartaMaquinaEl.innerHTML = "";
    cartaMaquinaEl.classList.add('verso');
}

function exibirCarta(elemento, carta, ehJogador) {
    elemento.classList.remove('verso');
    let html = `<div class="carta-nome">${carta.nome}</div>`;
    html += `<img src="${carta.imagem}" class="carta-imagem">`;

    // Garante que o container da habilidade seja criado para manter o tamanho
    let habilidade = carta.habilidadeEspecial || ""; 
    html += `<p class="carta-habilidade">`; 
    
    if (habilidade) {
        html += `<strong>Hab. Especial:</strong> ${habilidade}`;
    }
    
    html += `</p>`;

    html += '<div class="carta-atributos"><ul>';

    for (let atributo in carta.atributos) {
        if (ehJogador) {
            html += `<li onclick="comparar('${atributo}')">${atributo}: ${carta.atributos[atributo]}</li>`;
        } else {
            html += `<li>${atributo}: ${carta.atributos[atributo]}</li>`;
        }
    }

    html += '</ul></div>';
    elemento.innerHTML = html;
}

function comparar(atributoSelecionado) {
    if (jogoPausado) return; 

    const resultadoEl = document.getElementById('resultado');
    const btnProximaRodada = document.getElementById('btn-proxima-rodada');

    exibirCarta(document.getElementById('carta-maquina'), cartaMaquina, false);

    let valorJogador = cartaJogador.atributos[atributoSelecionado];
    let valorMaquina = cartaMaquina.atributos[atributoSelecionado];

    // --- LÓGICA DE TRUNFO ---
    const ehTrunfoJogador = cartaJogador.trunfo === true;
    const ehTrunfoMaquina = cartaMaquina.trunfo === true;

    let vitoriaJogador = false;
    let vitoriaMaquina = false;
    let empate = false;

    if (ehTrunfoJogador && ehTrunfoMaquina) {
        // Ambos são Trunfos: Coringa Sombrio ganha do Coringa normal
        if (cartaJogador.nome === 'Coringa Sombrio') {
            vitoriaJogador = true;
            resultadoEl.textContent = `Domínio Sombrio anula o Coringa! Você venceu!`;
        } else if (cartaMaquina.nome === 'Coringa Sombrio') {
            vitoriaMaquina = true;
            resultadoEl.textContent = `Domínio Sombrio anula o Coringa! Você perdeu!`;
        } else {
            empate = true; // Dois Coringas normais empatam
            resultadoEl.textContent = "Trunfos se anulam! Empate!";
        }

    } else if (ehTrunfoJogador && !ehTrunfoMaquina) {
        // Jogador tem Trunfo
        if (cartaJogador.nome === 'Coringa Sombrio') {
            vitoriaJogador = true;
            resultadoEl.textContent = `Coringa Sombrio vence! Você ganhou!`;
        } else {
            // Habilidade "Imprevisível" do Coringa normal: sempre empate contra carta normal
            empate = true;
            resultadoEl.textContent = `Imprevisível! O Coringa copiou os atributos! Empate!`;
        }

    } else if (!ehTrunfoJogador && ehTrunfoMaquina) {
        // Máquina tem Trunfo
        if (cartaMaquina.nome === 'Coringa Sombrio') {
            vitoriaMaquina = true;
            resultadoEl.textContent = `Coringa Sombrio vence! Você perdeu!`;
        } else {
            // Habilidade "Imprevisível" do Coringa normal: sempre empate contra carta normal
            empate = true;
            resultadoEl.textContent = `Imprevisível! O Coringa copiou os atributos! Empate!`;
        }

    } else {
        // Ninguém tem Trunfo (comparação normal)
        if (valorJogador > valorMaquina) {
            vitoriaJogador = true;
            resultadoEl.textContent = `Você venceu! ${valorJogador} > ${valorMaquina}`;
        } else if (valorMaquina > valorJogador) {
            vitoriaMaquina = true;
            resultadoEl.textContent = `Você perdeu! ${valorJogador} < ${valorMaquina}`;
        } else {
            empate = true;
            resultadoEl.textContent = "Empate!";
        }
    }
    // --- FIM DA LÓGICA ---


    // Atualiza os montes
    if (vitoriaJogador) {
        tocarSom(somVitoria);
        monteJogador.push(monteMaquina.shift()); 
        monteJogador.push(monteJogador.shift()); 
    } else if (vitoriaMaquina) {
        tocarSom(somDerrota);
        monteMaquina.push(monteJogador.shift()); 
        monteMaquina.push(monteMaquina.shift()); 
    } else if (empate) {
        monteJogador.push(monteJogador.shift());
        monteMaquina.push(monteMaquina.shift());
    }

    atualizarPlacar();
    btnProximaRodada.disabled = false;

    // Remove o onclick dos atributos para evitar jogada dupla
    const atributosLi = document.getElementById('carta-jogador').querySelectorAll('.carta-atributos li');
    atributosLi.forEach(li => li.onclick = null);
}

function fimDeJogo() {
    const btnJogar = document.getElementById('btn-jogar');
    const btnPausar = document.getElementById('btn-pausar');
    const btnProximaRodada = document.getElementById('btn-proxima-rodada');

    const mensagemFinal = monteJogador.length > 0 ? "Fim de jogo! Parabéns, você venceu!" : "Fim de jogo! Você perdeu.";
    document.getElementById('resultado').textContent = mensagemFinal;

    btnProximaRodada.disabled = true;
    btnPausar.disabled = true;
    btnJogar.disabled = false;
    btnJogar.textContent = "Jogar Novamente";
}