// Criando um novo elemento 
let novoElemento = document.createElement('h1');

// Alterando o conteúdo de texto do elemento
novoElemento.innerText = 'Parabens!!';

// Selecionando o elemento body
let elementoBody = document.body;

// Colocando o novo elemento no body
elementoBody.appendChild(novoElemento);

novoElemento.style.backgroundColor = 'blue';

novoElemento.style.color = 'yellow';

// Função para gerar um número aleatório entre 1 e 100
function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 100) + 1; // Gera um número entre 1 e 100
}

// Função principal do jogo
function jogarAdivinhacao() {
    const numeroSecreto = gerarNumeroAleatorio(); // Gera o número secreto
    let tentativas = 0; // Contador de tentativas
    let adivinhou = false; // Flag para controlar o estado do jogo

    while (!adivinhou) {
        const palpite = parseInt(prompt("Adivinhe um número entre 1 e 100:")); // Solicita o palpite do usuário
        tentativas++; // Incrementa o contador de tentativas

        if (palpite < 1 || palpite > 100 || isNaN(palpite)) {
            alert("Por favor, insira um número válido entre 1 e 100."); // Valida o palpite
        } else if (palpite < numeroSecreto) {
            alert("Muito baixo! Tente novamente."); // Informa se o palpite é baixo
        } else if (palpite > numeroSecreto) {
            alert("Muito alto! Tente novamente."); // Informa se o palpite é alto
        } else {
            adivinhou = true; // O usuário adivinhou o número
            alert(`Parabéns! Você adivinhou o número ${numeroSecreto} em ${tentativas} tentativas!`); // Mensagem de vitória
        }
    }
}

// Inicia o jogo
jogarAdivinhacao();
