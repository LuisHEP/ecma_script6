// Map

let meuMap = new Map();
meuMap.set("nome", "Luis");
meuMap.set("stack", "html, css, js");

console.log(meuMap);

const nome = meuMap.get("nome");

console.log(nome);

console.log(meuMap.size);

console.log(meuMap.has("nome"));

for(let chave of meuMap.keys()) {
    console.log(chave);
}

for(let valor of meuMap.values()) {
    console.log(valor);
}

for(let entrada of meuMap.entries()) {
    console.log(entrada);
}

for(let [chave, valor] of meuMap.entries()) {
    console.log(`${chave}: ${valor}`);
}

meuMap.delete("stack");

console.log(meuMap);

// Set

const cpfs = new Set();

cpfs.add('55060779041')
cpfs.add('39609352006')
cpfs.add('58816251026')

console.log(cpfs);
console.log(cpfs.keys());
console.log(cpfs.values());

cpfs.forEach((valor) => {
    console.log(valor);
})

// Removendo items duplicados com Set e transformando um array em Set

const array = ['Luis Paladino', 'Maria Isabel', 'José Paulo', 'Luana', 'Luana', 'Luis Paladino']

const arrayComoSet = new Set([...array])

console.log(arrayComoSet);

// Voltando um Set para array sem duplicados

const arraySemDuplicados = [...arrayComoSet]

console.log(arraySemDuplicados);
