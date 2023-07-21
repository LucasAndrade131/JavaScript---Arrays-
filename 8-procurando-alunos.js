const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno) {
    if (listaDeAlunosEMedias[0].includes(aluno)) {
        // const alunos = listaDeAlunosEMedias[0];
        // const medias = listaDeAlunosEMedias[1]; 

        const [alunos, medias] = listaDeAlunosEMedias;

        const indice = alunos.indexOf(aluno);
        
        const mediaDoAluno = listaDeAlunosEMedias[1][indice];
        
        console.log(`${aluno} tem a média ${mediaDoAluno}.`);
        // console.log(indice); para saber qual é o indice
    }else{
        console.log("Aluno não encontrado!");
    }
}

exibeNomeENota("Ana");