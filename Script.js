// Database Mock
const GUESTS_DB = ["Alice", "Bernardo", "Arthur", "Caio", "Amanda", "Dandara", "Enzo", "Augusto", "Valentina", "Alex"];

// Utilitário Range (Gerador)
const range = (n) => Array.from({ length: n }, (_, i) => i);

const App = {
    init() {
        lucide.createIcons(); // Inicia os ícones
        this.render();
    },

    // Lógica de Processamento
    processData() {
        return {
            allUpper: GUESTS_DB.map(name => name.toUpperCase()),
            shortNames: GUESTS_DB.filter(name => name.length <= 5),
            longNames: GUESTS_DB.filter(name => name.length > 5),
            countA: GUESTS_DB.reduce((acc, name) => 
                name.toLowerCase().startsWith('a') ? acc + 1 : acc, 0)
        };
    },

    render() {
        const data = this.processData();
        const indices = range(GUESTS_DB.length);

        // Referências DOM
        const containers = {
            upper: document.getElementById('list-upper'),
            short: document.getElementById('list-short'),
            long: document.getElementById('list-long')
        };

        // Renderização com o loop range() solicitado
        indices.forEach(i => {
            const name = GUESTS_DB[i];
            
            // 1. Lista Maiúscula
            containers.upper.innerHTML += `<li>${name.toUpperCase()}</li>`;
            
            // 2 e 3. Listas Separadas
            if (name.length > 5) {
                containers.long.innerHTML += `<li>${name} <small>(${name.length} chars)</small></li>`;
            } else {
                containers.short.innerHTML += `<li>${name}</li>`;
            }
        });

        // Atualização de Stats
        document.getElementById('stat-a').textContent = data.countA;
        document.getElementById('total-count').textContent = GUESTS_DB.length;
    }
};

document.addEventListener('DOMContentLoaded', () => App.init());
