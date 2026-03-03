let guests = ["Alice Silva", "Bruno Costa", "Amanda Lira", "Caio Souza"];

// Função Range (Requisito)
const range = (n) => Array.from({ length: n }, (_, i) => i);

const App = {
    init() {
        lucide.createIcons();
        this.bindEvents();
        this.render();
    },

    bindEvents() {
        document.getElementById('add-btn').onclick = () => this.addGuest();
        document.getElementById('guest-input').onkeypress = (e) => {
            if (e.key === 'Enter') this.addGuest();
        };
    },

    addGuest() {
        const input = document.getElementById('guest-input');
        if (input.value.trim()) {
            guests.push(input.value.trim());
            input.value = "";
            this.render();
        }
    },

    deleteGuest(index) {
        guests.splice(index, 1);
        this.render();
    },

    render() {
        const uis = {
            upper: document.getElementById('list-upper'),
            short: document.getElementById('list-short'),
            long: document.getElementById('list-long'),
            total: document.getElementById('total-count'),
            countA: document.getElementById('count-a')
        };

        // Limpa tudo
        Object.values(uis).forEach(el => { if(el.tagName === 'UL') el.innerHTML = "" });

        let aCounter = 0;

        // Loop usando range() nos índices
        range(guests.length).forEach(i => {
            const name = guests[i];
            
            if (name.toLowerCase().startsWith('a')) aCounter++;

            // Template de Item
            const createItem = (content, isUpper = false) => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <span>${isUpper ? content.toUpperCase() : content}</span>
                    <button class="delete-btn" onclick="App.deleteGuest(${i})">
                        <i data-lucide="trash-2" style="width:16px"></i>
                    </button>
                `;
                return li;
            };

            uis.upper.appendChild(createItem(name, true));
            
            if (name.length > 5) {
                uis.long.appendChild(createItem(name));
            } else {
                uis.short.appendChild(createItem(name));
            }
        });

        uis.total.textContent = guests.length;
        uis.countA.textContent = aCounter;
        lucide.createIcons(); // Recarrega os ícones dos novos botões
    }
};

App.init();
