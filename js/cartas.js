const baralho = [
    // 🗡️ ESPADAS
    {
        nome: 'Ás de Espadas',
        imagem: 'https://deckofcardsapi.com/static/img/AS.png',
        atributos: { 'Força': 10, 'Velocidade': 8, 'Inteligência': 9, 'Resistência': 8, 'Sorte': 7 },
        elemento: 'Ar',
        habilidadeEspecial: 'Corte Preciso: ignora 20% da resistência do inimigo.'
    },
    {
        nome: '2 de Espadas',
        imagem: 'https://deckofcardsapi.com/static/img/2S.png',
        atributos: { 'Força': 2, 'Velocidade': 3, 'Inteligência': 4, 'Resistência': 3, 'Sorte': 2 },
        elemento: 'Ar'
    },
    {
        nome: '3 de Espadas',
        imagem: 'https://deckofcardsapi.com/static/img/3S.png',
        atributos: { 'Força': 3, 'Velocidade': 4, 'Inteligência': 5, 'Resistência': 4, 'Sorte': 3 },
        elemento: 'Ar'
    },
    {
        nome: '5 de Espadas',
        imagem: 'https://deckofcardsapi.com/static/img/5S.png',
        atributos: { 'Força': 5, 'Velocidade': 6, 'Inteligência': 7, 'Resistência': 5, 'Sorte': 6 },
        elemento: 'Ar'
    },
    {
        nome: 'Rei de Espadas',
        imagem: 'https://deckofcardsapi.com/static/img/KS.png',
        atributos: { 'Força': 9, 'Velocidade': 8, 'Inteligência': 10, 'Resistência': 9, 'Sorte': 8 },
        elemento: 'Ar',
        habilidadeEspecial: 'Comando Supremo: aumenta em +2 todos os atributos das cartas de Espadas aliadas.'
    },

    // 💖 COPAS
    {
        nome: 'Ás de Copas',
        imagem: 'https://deckofcardsapi.com/static/img/AH.png',
        atributos: { 'Força': 10, 'Velocidade': 8, 'Inteligência': 9, 'Resistência': 9, 'Sorte': 10 },
        elemento: 'Água',
        habilidadeEspecial: 'Coração Curativo: regenera 3 pontos de resistência após vencer uma rodada.'
    },
    {
        nome: '2 de Copas',
        imagem: 'https://deckofcardsapi.com/static/img/2H.png',
        atributos: { 'Força': 2, 'Velocidade': 3, 'Inteligência': 4, 'Resistência': 3, 'Sorte': 5 },
        elemento: 'Água'
    },
    {
        nome: '3 de Copas',
        imagem: 'https://deckofcardsapi.com/static/img/3H.png',
        atributos: { 'Força': 3, 'Velocidade': 4, 'Inteligência': 5, 'Resistência': 4, 'Sorte': 6 },
        elemento: 'Água'
    },
    {
        nome: 'Rei de Copas',
        imagem: 'https://deckofcardsapi.com/static/img/KH.png',
        atributos: { 'Força': 9, 'Velocidade': 7, 'Inteligência': 10, 'Resistência': 9, 'Sorte': 10 },
        elemento: 'Água',
        habilidadeEspecial: 'Empatia Real: reduz o poder do inimigo em 10% durante o combate.'
    },
    {
        nome: 'Rainha de Copas',
        imagem: 'https://deckofcardsapi.com/static/img/QH.png',
        atributos: { 'Força': 8, 'Velocidade': 8, 'Inteligência': 9, 'Resistência': 8, 'Sorte': 9 },
        elemento: 'Água',
        habilidadeEspecial: 'Encanto Sereno: tem 30% de chance de anular a habilidade inimiga.'
    },

    // 💎 OUROS
    {
        nome: '7 de Ouros',
        imagem: 'https://deckofcardsapi.com/static/img/7D.png',
        atributos: { 'Força': 5, 'Velocidade': 6, 'Inteligência': 7, 'Resistência': 7, 'Sorte': 8 },
        elemento: 'Terra'
    },
    {
        nome: 'Rainha de Ouros',
        imagem: 'https://deckofcardsapi.com/static/img/QD.png',
        atributos: { 'Força': 8, 'Velocidade': 8, 'Inteligência': 9, 'Resistência': 9, 'Sorte': 10 },
        elemento: 'Terra',
        habilidadeEspecial: 'Fortuna Dourada: ganha +2 de sorte permanente após cada vitória.'
    },
    {
        nome: 'Rei de Ouros',
        imagem: 'https://deckofcardsapi.com/static/img/KD.png',
        atributos: { 'Força': 9, 'Velocidade': 8, 'Inteligência': 9, 'Resistência': 10, 'Sorte': 9 },
        elemento: 'Terra',
        habilidadeEspecial: 'Mão do Ouro: dobra os pontos obtidos ao vencer uma rodada.'
    },

    // 🔥 PAUS
    {
        nome: 'Valete de Paus',
        imagem: 'https://deckofcardsapi.com/static/img/JC.png',
        atributos: { 'Força': 7, 'Velocidade': 9, 'Inteligência': 7, 'Resistência': 6, 'Sorte': 7 },
        elemento: 'Fogo',
        habilidadeEspecial: 'Ataque Relâmpago: ataca primeiro, causando +1 de dano adicional.'
    },
    {
        nome: '10 de Paus',
        imagem: 'https://deckofcardsapi.com/static/img/0C.png',
        atributos: { 'Força': 8, 'Velocidade': 7, 'Inteligência': 7, 'Resistência': 8, 'Sorte': 6 },
        elemento: 'Fogo'
    },
    {
        nome: 'Rei de Paus',
        imagem: 'https://deckofcardsapi.com/static/img/KC.png',
        atributos: { 'Força': 10, 'Velocidade': 8, 'Inteligência': 9, 'Resistência': 8, 'Sorte': 7 },
        elemento: 'Fogo',
        habilidadeEspecial: 'Chama Real: aumenta a força de todas as cartas de Paus em +1 enquanto estiver em jogo.'
    },

    // 🃏 CORINGAS E ESPECIAIS
    {
        nome: 'Coringa',
        imagem: 'https://deckofcardsapi.com/static/img/X1.png',
        atributos: { 'Força': 10, 'Velocidade': 10, 'Inteligência': 10, 'Resistência': 10, 'Sorte': 10 },
        elemento: 'Caos',
        habilidadeEspecial: 'Imprevisível: copia os atributos e a habilidade da carta que está enfrentando.',
        trunfo: true
    },
    {
        nome: 'Coringa Sombrio',
        imagem: 'https://deckofcardsapi.com/static/img/X2.png',
        atributos: { 'Força': 11, 'Velocidade': 9, 'Inteligência': 10, 'Resistência': 9, 'Sorte': 5 },
        elemento: 'Trevas',
        habilidadeEspecial: 'Domínio Sombrio: anula qualquer trunfo inimigo e absorve 20% de seus atributos.',
        trunfo: true
    }
];