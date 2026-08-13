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
    
    // Atualiza o texto da dica
    elementoTexto.innerText = dicas[indiceAtual];
    elementoTexto.style.display = "block";

    // Avança para a próxima dica na lista
    indiceAtual = (indiceAtual + 1) % dicas.length;
}