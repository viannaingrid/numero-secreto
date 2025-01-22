let numeroSecreto = numeroAleatorio();

function exibirTexto(tag, texto) {

    let campo = document.querySelector(tag)
    campo.innerHTML = texto

}

exibirTexto('h1', 'Jogo do número secreto');
exibirTexto('p', ' Escolha um número entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input');
    console.log(numeroSecreto);
}

function numeroAleatorio() {
   return parseInt(Math.random() * 10 + 1);
}