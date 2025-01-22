let numeroSecreto = numeroAleatorio();

function exibirTexto(tag, texto) {

    let campo = document.querySelector(tag)
    campo.innerHTML = texto

}

exibirTexto('h1', 'Jogo do número secreto');
exibirTexto('p', ' Escolha um número entre 1 e 10');

function verificarChute() {
<<<<<<< HEAD
    let chute = document.querySelector('input');
    console.log(numeroSecreto);
=======
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
>>>>>>> d3d8517eea73297957914dfb4835205d34508e38
}

function numeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}