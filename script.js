// Lista inicial de dados
let guests = ["Alice", "Bruno", "Amanda", "Carlos", "Beatriz"];

// Função Range personalizada (estilo Python)
const range = (start, end) => Array.from({ length: end - start }, (_, i) => start + i);

function updateUI() {
    const listUpper = document.getElementById('list-upper');
    const listShort = document.getElementById('list-short');
    const listLong = document.getElementById('list-long');
    const countA = document.getElementById('count-a');
    const totalCount = document.getElementById('total-count');

    // Limpar listas antes de renderizar
    listUpper.innerHTML = "";
    listShort.innerHTML = "";
    listLong.innerHTML = "";

    let aCounter = 0;

    // Uso do loop com range() para percorrer os índices
    const indices = range(0, guests.length);
    
    indices.forEach(index => {
        const name = guests[index];

        // 1. Contagem de nomes com 'A'
        if (name.toUpperCase().startsWith('A')) aCounter++;

        // 2. Criar elemento para Lista Maiúscula
        const liUpper = document.createElement('li');
        liUpper.textContent = name.toUpperCase();
        listUpper.appendChild(liUpper);

        // 3. Separar por tamanho (> 5 letras)
        const liGeneric = document.createElement('li');
        liGeneric.textContent = name;

        if (name.length > 5) {
            listLong.appendChild(liGeneric);
        } else {
            listShort.appendChild(liGeneric);
        }
    });

    // Atualizar estatísticas
    countA.textContent = aCounter;
    totalCount.textContent = guests.length;
}

function addGuest() {
    const input = document.getElementById('guest-input');
    if (input.value.trim() !== "") {
        guests.push(input.value.trim());
        input.value = "";
        updateUI();
    }
}

// Inicializar aplicação
document.addEventListener('DOMContentLoaded', updateUI);
