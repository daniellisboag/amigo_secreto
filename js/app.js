let amigos = [];

function adicionar() {
   let listaAmigos = document.getElementById('lista-amigos');
   let nome = document.getElementById('nome-amigo').value;
   if (amigos.includes(nome)) {
      alert('Esse nome já existe na lista de amigos.');
      return;
   } else if (nome == '') {
      alert('Informe o nome de um amigo.');
      return;
   }
   amigos.push(nome);
   listaAmigos.textContent = listaAmigos.textContent ? `${listaAmigos.textContent}, ${nome}` : nome;
   document.getElementById('nome-amigo').value = '';
}

function sortear() {
   if (amigos.length < 4) {
      alert('Informe no minímo 4 amigos para sortear.');
      return;
   }
   embaralha(amigos);
   let listaSorteio = document.getElementById('lista-sorteio');
   for (let i = 0; i < amigos.length; i++) {
      if (i == amigos.length - 1) {
         listaSorteio.innerHTML = listaSorteio.innerHTML + `${amigos[i]} --> ${amigos[0]}<br>`;
      } else {
         listaSorteio.innerHTML = listaSorteio.innerHTML + `${amigos[i]} --> ${amigos[i + 1]}<br>`;
      }
   }
}

function embaralha(lista) {
   for (let indice = lista.length; indice; indice--) {
      const indiceAleatorio = Math.floor(Math.random() * indice);
      [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
   }
}

function reiniciar() {
   let listaSorteio = document.getElementById('lista-sorteio');
   document.getElementById('lista-amigos').textContent = '';
   listaSorteio.innerHTML = '';
   amigos = [];
}