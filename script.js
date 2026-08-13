// Lista de conselhos para o botão interativo
const dicas = [
    "Dica 1: Se a mensagem pede dinheiro urgente, desligue ou feche o aplicativo e ligue para a pessoa usando o número normal.",
    "Dica 2: Bancos NUNCA pedem sua senha por telefone ou WhatsApp.",
    "Dica 3: Não clique em links estranhos enviados por SMS ou WhatsApp, mesmo que venham de amigos.",
    "Dica 4: Antes de compartilhar uma notícia no WhatsApp, pesquise sobre ela na TV ou no rádio.",
    "Dica 5: Na dúvida, peça ajuda a um filho, neto ou pessoa de sua confiança!"
];

let indiceAtual = 0;

function mostrarDica() {
    const elementoTexto = document.getElementById("textoDica");
    const btnOuvir = document.getElementById("btnOuvirDica");
    
    // Atualiza o texto da dica
    elementoTexto.innerText = dicas[indiceAtual];
    elementoTexto.style.display = "block";
    btnOuvir.style.display = "inline-block";

    // Lê automaticamente a nova dica gerada
    lerTexto(dicas[indiceAtual]);

    // Avança para a próxima dica na lista
    indiceAtual = (indiceAtual + 1) % dicas.length;
}

/* --- SISTEMA DE LEITURA EM VOZ ALTA --- */

// Função para ler um texto diretamente
function lerTexto(texto) {
    // Para qualquer fala que esteja acontecendo no momento
    window.speechSynthesis.cancel();

    if ('speechSynthesis' in window) {
        const mensagem = new SpeechSynthesisUtterance(texto);
        mensagem.lang = 'pt-BR'; // Configura o idioma para português do Brasil
        mensagem.rate = 0.9;     // Velocidade um pouco mais lenta para facilitar o entendimento
        
        window.speechSynthesis.speak(mensagem);
    } else {
        alert("Infelizmente seu navegador não suporta a leitura em voz alta.");
    }
}

// Função para ler o conteúdo de uma seção pelo ID do elemento
function lerSecao(idElemento) {
    const elemento = document.getElementById(idElemento);
    if (elemento) {
        lerTexto(elemento.innerText);
    }
}

// Função para interromper a fala
function pararFala() {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
    }
}