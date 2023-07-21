const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];

const reprovados = alunos.filter((aluno, indice) => { //filter para filtrar os elementos
    return medias[indice] < 7; //return <7 utilizando um parametro para retornar notas abaixas de 7
});

console.log(reprovados);