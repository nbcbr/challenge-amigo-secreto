// Desafio Amigo Secreto do Praticando Logica de programação: Challenge amigo secreto (Alura)
let amigos = [];
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Bem-vindo ao <strong style="color: black;">Amigo Secreto</strong>! Adicione os participantes e clique em Sortear para descobrir quem é o ganhador';
titulo.style.textAlign = "center";

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();
    if (nome !== "" && !amigos.includes(nome)) {
        amigos.push(nome);
        atualizarLista();
        input.value = "";
    } else {
        alert("Nome inválido ou já adicionado!");
    }
}
function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(nome => {
        const li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para sortear!");
        return;
    }
    const ganhador = amigos[Math.floor(Math.random() * amigos.length)];
    exibirResultado(ganhador);
}
function exibirResultado(ganhador) {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";  
    const li = document.createElement("li");
    li.textContent = `O ganhador é: ${ganhador}!`;
    resultado.appendChild(li);
}
