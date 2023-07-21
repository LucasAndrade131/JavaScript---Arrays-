const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];
//elementos de um Set não podem se repetir
const meuSet = new Set(nomes);

const nomesAtualizados = [...meuSet];

console.log(nomesAtualizados);