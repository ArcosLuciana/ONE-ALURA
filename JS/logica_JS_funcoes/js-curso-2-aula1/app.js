//JOGO TESTADO E FUNCIONANDO
let numeroSecreto = gerarNumeroAleatorio();
//vamos adicionar um titulo criando uma variável título - let titulo
// e essa variável vai fazer referencia ao documento do html = document
// e devemos selecionar a tag que vamos inserir o texto, que é Título h1  .querySelector('h1')
/*let titulo = document.querySelector('h1');*/ /*nesse momento está vazio no html <h1><h1>*/
//o objetivo é qua através do js, se altere o html. dentro do HTML naquele titulo, então:
/*titulo.innerHTML = 'Jogo do Número Secreto';*/
// e vou fazer o mesmo com o parágrafo para fazer as mensagens do alert

/*let paragrafo = document.querySelector('p');*/
/*paragrafo.innerHTML = 'Escolha um número entre 1 e 10';*/

//boa prática reduzir as 4 linhas acimas por essa atraves de funções:
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

//corpo da função(padrao): 
// chamar a function 
// nome da função (verificandoChute())
// corpo da função colocada entre chaves {} e colocar o consol.log por exemplo
function verificarChute() {
    let chute = document.querySelector('input').value;
    /*console.log(chute == numeroSecreto);*/
    //controle if-else
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', 'Você descobriu o número secreto!');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p','O número secreto é menor');
        } else {
            exibirTextoNaTela('p','O número secreto é maior');
        } 
    }   
}
 
//agora vamos gerar o numero aleatório e podemos criar uma função pra isso
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}
