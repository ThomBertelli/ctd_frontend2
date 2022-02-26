let vitoriasBot = 0;
let vitoriasJogador = 0;


//verifica se a quantidade de rodade é menor que 2
function verificaNumeroRodadas() {
   if (vitoriasBot < 2 && vitoriasJogador < 2){
       iniciar()
    };
};

//inicia o jogo
function iniciar() {
    let escolhaBot = parseInt(Math.random() * 3 + 1);
    let escolhaUsuario = prompt('1- Papel, 2- Tesoura, 3- Pedra')
    trataEscolhaUsuario(escolhaUsuario,escolhaBot)
}   
    //Compara a escolha do usuário com a do Bot    
function logica(usuario,bot){    
    
    switch (usuario) {

        case 1:
            papel(bot, usuario);
            break;
        case 2:
            tesoura(bot, usuario)
            break;
        case 3:
            pedra(bot, usuario)
            break;
    };
    verificaNumeroRodadas()
    jogarNovamente();
};

function trataEscolhaUsuario(escolha,bot){
    escolha = parseInt(escolha);
    console.log(escolha)
    if (escolha > 0 && escolha < 4){
        logica(escolha,bot);
        
    }else{
        alert("Por favor escolha 1- Papel, 2- Tesoura, 3- Pedra ");
        iniciar();    
    };
};


//Função se a escolha do usuário for papel  
function papel(bot, usuario) {

    switch (bot) {
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
    console.log('Jogada do Usuário ' + usuario)
    console.log('Jogada do Bot ' + bot)
};

//Função se a escolha do usuário for tesoura
function tesoura(bot, usuario) {
    switch (bot) {
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
    console.log('Jogada do Usuário ' + usuario)
    console.log('Jogada do Bot ' + bot)
};

//Função se a escolha do usuário for pedra
function pedra(bot, usuario) {
    switch (bot) {
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
    console.log('Jogada do Usuário ' + usuario)
    console.log('Jogada do Bot ' + bot)
};

function jogarNovamente (){
    //Verifica quem ganhou as duas respostas e pergunta se o usuário quer jogar novamente
    if (vitoriasBot === 2) {
        if (confirm("Que pena você perdeu 2 rodadas! Quer jogar novamente?")) {
            resetaPlacar()
            verificaNumeroRodadas()
        } else {
                  
        };
    }else if (vitoriasJogador === 2) {
        if (confirm("Parabéns você ganhou 2 rodadas! Quer jogar novamente?")) {
            resetaPlacar()
            verificaNumeroRodadas()
        } else {
           
        };
    }
};

function resetaPlacar(){
    vitoriasBot = 0;
    vitoriasJogador = 0;
}