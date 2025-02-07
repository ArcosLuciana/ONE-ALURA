// JOGO TESTADO E FUNCIONANDO
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1; /*variavel tentativas já começa com 1 tentativa*/

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}



function verificarChute() {
    let chute = document.querySelector('input').value;
    //console.log(chute == numeroSecreto);
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        //criar variavel para a palavra tentativa acompanhar singular e plural:
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        //tem que criar a variavel para tamplate string, uma mensagem entre ``
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        //antes de chamar o senão vamos desativar o disabled no html (linha 28)
        // para ao acertar, o botão Novo Jogo seja habilitado:
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        //tentativas = tentativas + 1; ou o metodo mais prático:
        tentativas++;
        //valos limpar o campo apos cada tentativa
        //mas o js não reconhece apenas limparCampos()
        //então cria-se uma função sem parâmetro, não espera valor ou retorno
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

function limparCampo() {
    chute = document.querySelector('input'); /*não tem o .value pq queremos pegar apenas o campo e não o valor*/
    chute.value = ''; /*string vazia, o campo vai ficar vazio*/
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    /*exibirTextoNaTela('h1', 'Jogo do número secreto');
      exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');*/
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}











