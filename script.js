let tabela = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
let tam = tabela.length;
let Njogada = 0;
let limitejogada = 9;
let info = document.querySelector(".info P");
let placarx = document.querySelector("#pontosx");
let placary = document.querySelector("#pontosy");
let pontosx = 0;
let pontosy = 0;

let jogador1 = "Jogador 1";
let jogador2 = "Jogador 2";

info.innerHTML = jogador1 + " é sua vez!!";



function jogada(posicao) {

    //obtendo as coordenadas.
    let x = posicao.id[0];
    let y = posicao.id[1];


    if (tabela[x][y] != 0) {
        alert("Jogada invalida!!!\njogue em um lugar em branco");
        return;
    } else {
        if ((Njogada % 2) == 0) {
            tabela[x][y] = 1;
        } else {
            tabela[x][y] = -1;
        }
    }


    alterarTabela(posicao.id, Njogada);


    let vv = verificarVitoria();
    if (vv == 3) {

        console.log("vitoria X")
        jogadorVenceu();
        pontosx++;
        placarx.innerHTML = pontosx;

        setTimeout(function () {
            alert('Fim de jogo!!!\nclique OK para jogar novamente');
        }, 400);


        setTimeout(function () {
            limparJogo();
        }, 400);



    } else if (vv == -3) {

        console.log("vitoria 0")
        jogadorVenceu();
        pontosy++;
        placary.innerHTML = pontosy;
        setTimeout(function () {
            alert('Fim de jogo!!!\nclique OK para jogar novamente');
        }, 400);



        setTimeout(function () {
            limparJogo();
        }, 400);


    } else if (Njogada == limitejogada - 1) {
        deuVelha();
        setTimeout(function () {
            alert('Fim de jogo!!!\nclique OK para jogar novamente');
        }, 400)

        setTimeout(function () {
            limparJogo();
        }, 400);
    }

    Njogada++;

};

function alterarTabela(num, Njogada) {
    //altera a tabela do jogo

    if (Njogada % 2 == 0) {
        //X
        document.getElementById(num).innerHTML = "X";
        info.innerHTML = jogador2 + ' é sua vez!!';
    } else {
        //O
        document.getElementById(num).innerHTML = "O";
        info.innerHTML = jogador1 + " é sua vez!!";
    }
}

function verificarVitoria() {
    //verifica a se algum dos jogadores venceu
    let teste = [];
    teste[0] = tabela[0][0] + tabela[0][1] + tabela[0][2];
    teste[1] = tabela[1][0] + tabela[1][1] + tabela[1][2];
    teste[2] = tabela[2][0] + tabela[2][1] + tabela[2][2];

    teste[3] = tabela[0][0] + tabela[1][0] + tabela[2][0];
    teste[4] = tabela[0][1] + tabela[1][1] + tabela[2][1];
    teste[5] = tabela[0][2] + tabela[1][2] + tabela[2][2];

    teste[6] = tabela[0][0] + tabela[1][1] + tabela[2][2];

    teste[7] = tabela[0][2] + tabela[1][1] + tabela[2][0];

    for (let i = 0; i < teste.length; i++) {
        if (teste[i] === 3) {
            return 3;
        } else if (teste[i] === -3) {
            return -3;
        };
    }

    return 0;

}

function jogadorVenceu() {

    if (Njogada % 2 == 0) {
        //X
        info.innerHTML = jogador1 + ' é o vencedor!!';
    } else {
        //O
        info.innerHTML = jogador2 + ' é o vencedor!!';
    }

}


function deuVelha() {
    info.innerHTML = "Deu velha!!!!"
}

function limparJogo() {

    tabela = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

    for (let i = 0; i < tam; i++) {

        for (let j = 0; j < tam; j++) {
            let num = i.toString() + j.toString();
            console.log(num);
            document.getElementById(num).innerHTML = ""


        };

    };

    if (limitejogada == 9) {
        Njogada = 1;
        limitejogada = 10;
        info.innerHTML = jogador2 + ' é sua vez!!';
    } else {
        Njogada = 0;
        limitejogada = 9;
        info.innerHTML = jogador1 + " é sua vez!!";
    }

}


function mudarPagina() {
    jogador1 = document.getElementById("Njogador1").value;
    jogador2 = document.getElementById("Njogador2").value;


    let menu = document.querySelector(".inicial");

    console.log(menu)

    menu.classList.add("anim");

    setTimeout(function () {
        menu.style.display = "none";
        document.querySelector("main").style.display = "block"
        document.querySelector("main").classList.add("anim2")
    }, 1300);

    //alterar placar e primeira info
    info.innerHTML = `${jogador1} é a sua vez!!`;
    document.querySelector("#nomej1").innerHTML = jogador1;
    document.querySelector("#nomej2").innerHTML = jogador2;
}
