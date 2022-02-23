let vitoriasBot = 0;
let vitoriasJogador = 0;

verificaNumeroRodadas();

function verificaNumeroRodadas() {
    while (vitoriasBot < 2 && vitoriasJogador < 2) {
        iniciar();
    };
};

function iniciar() {
    let escolhaUsuario = parseInt(prompt('1- Papel, 2- Tesoura, 3- Pedra'));
    let escolhaBot = parseInt(Math.random() * 3 + 1);

    switch (escolhaUsuario) {

        case 1:
            papel()
            break;
        case 2:
            tesoura()
            break;
        case 3:
            pedra()
            break;
    };

    function papel() {
        switch (escolhaBot) {
            case 1:
                alert("EMPATOU");
                break;
            case 2:
                alert("Bot Ganhou !!!");
                vitoriasBot++;
                break;
            case 3:
                alert("Você Ganhou!!!");
                vitoriasJogador++;
                break;

        };
        console.log('Jogada do Usuário ' + escolhaUsuario)
        console.log('Jogada do Bot ' + escolhaBot)
    };

    function tesoura() {
        switch (escolhaBot) {
            case 2:
                alert("EMPATOU");
                break;
            case 3:
                alert("Bot Ganhou !!!");
                vitoriasBot++;
                break;
            case 1:
                alert("Você Ganhou!!!");
                vitoriasJogador++;
                break;

        };
        console.log('Jogada do Usuário ' + escolhaUsuario)
        console.log('Jogada do Bot ' + escolhaBot)
    };

    function pedra() {
        switch (escolhaBot) {
            case 3:
                alert("EMPATOU");
                break;
            case 1:
                alert("Bot Ganhou !!!");
                vitoriasBot++;
                break;
            case 2:
                alert("Você Ganhou!!!");
                vitoriasJogador++;
                break;

        };
        console.log('Jogada do Usuário ' + escolhaUsuario)
        console.log('Jogada do Bot ' + escolhaBot)
    };

    if (vitoriasBot === 2) {
        if (confirm("Que pena você perdeu 2 rodadas! Quer jogar novamente?")) {
            vitoriasBot = 0;
            vitoriasJogador = 0;
            verificaNumeroRodadas();
        } else {
            alert("Que pena! Até a próxima!")
            window.close();
        };
    } if (vitoriasJogador === 2) {
        if (confirm("Parabéns você ganhou 2 rodadas! Quer jogar novamente?")) {
            vitoriasBot = 0;
            vitoriasJogador = 0;
            verificaNumeroRodadas();
        } else {
            alert("Que pena! Até a próxima!")
            window.close();
        };
    };

};


