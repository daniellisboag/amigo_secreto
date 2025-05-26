let amigos = [];

function adicionar() {
   let listaAmigos = document.getElementById('lista-amigos');
   let nome = document.getElementById('nome-amigo').value;
   amigos.push(nome);
   listaAmigos.textContent = listaAmigos.textContent ? `${listaAmigos.textContent}, ${nome}` : nome;
   document.getElementById('nome-amigo').value = '';
}

function reiniciar() {
   lista = [];
   document.getElementById('lista-amigos').textContent = '';
}