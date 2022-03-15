const pessoas = [
    { id: 3, nome: 'Higor' },
    { id: 2, nome: 'Jaci' },
    { id: 1, nome: 'Jose' }
];

// const novasPessoas = {};
// for (const pessoa of pessoas) {
//     const { id } = pessoa;
//     novasPessoas[id] = { ...pessoa };
// }

const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, {...pessoa});
}

