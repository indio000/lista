const guests = ["Adriano", "Beatriz", "Ana", "Caio", "Alexandre", "Wagner", "Amanda", "Zoe"];

// Helper: Função Range estilo Python
const range = (size) => [...Array(size).keys()];

const initApp = () => {
    const ui = {
        upper: document.getElementById('list-upper'),
        short: document.getElementById('list-short'),
        long: document.getElementById('list-long'),
        stats: document.querySelector('#stats-a strong'),
        badge: document.getElementById('badge-count')
    };

    let countA = 0;
    ui.badge.textContent = guests.length;

    // Usando range para iterar sobre os índices
    range(guests.length).forEach(i => {
        const name = guests[i];

        // 1. Lógica da Letra A
        if (name.toLowerCase().startsWith('a')) countA++;

        // 2. Criar Elementos
        const createLi = (content) => {
            const li = document.createElement('li');
            li.textContent = content;
            return li;
        };

        // Popular Lista Maiúscula
        ui.upper.appendChild(createLi(name.toUpperCase()));

        // Popular Listas por tamanho
        if (name.length > 5) {
            ui.long.appendChild(createLi(name));
        } else {
            ui.short.appendChild(createLi(name));
        }
    });

    ui.stats.textContent = countA;
};

document.addEventListener('DOMContentLoaded', initApp);
