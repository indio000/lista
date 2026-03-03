// 1. Lista original de convidados
const convidados = ["Alice", "Bruno", "Amanda", "Carlos", "Beatriz", "Augusto", "Daniela", "Leonardo"];

// Referências do DOM
const ulMaiuscula = document.getElementById('lista-maiuscula');
const ulLongos = document.getElementById('lista-longos');
const ulCurtos = document.getElementById('lista-curtos');
const displayContador = document.getElementById('contador-a');

// Função auxiliar que simula o range() para iterar no loop
const range = (start, end) => Array.from({ length: end - start }, (_, k) => k + start);

let contadorA = 0;

// Loop principal usando o range de índices da lista
for (let i of range(0, convidados.length)) {
    let nome = convidados[i];

    // Contagem de nomes que começam com 'A'
    if (nome.toUpperCase().startsWith('A')) {
        contadorA++;
    }

    // Criar elemento de lista (LI) para a lista de Maiúsculos
    let li = document.createElement('li');
    li.textContent = nome.toUpperCase();
    ulMaiuscula.appendChild(li);

    // Lógica para separar em listas de acordo com o tamanho
    let liTamanho = document.createElement('li');
    liTamanho.textContent = nome;

    if (nome.length > 5) {
        ulLongos.appendChild(liTamanho);
    } else {
        ulCurtos.appendChild(liTamanho);
    }
}

// Exibir o total de nomes com A
displayContador.textContent = `Total de nomes que começam com 'A': ${contadorA}`;
