// Arrays Exercício 1: Cria um array com nomes de alunos presentes na aula. 
// Depois, cria uma função que receba um nome e diga se ele está presente ou não.

let alunos = ["Richard", "Manuella", "Matheus", "Arthur", "Breno", "Daniel", "Lobinho", "Natan", "Christian", "Gabriel"];

const alunosPresentes = function(nome){
    let nomesFormatado = nome.toLowerCase();
    let nomesPadronizador = alunos.map(n => n.toLowerCase());

    if(nomesPadronizador.includes(nomesFormatado)){
        return `O aluno ${nome} esta presente na aula`;
    }
    else {
        return `O aluno ${nome} não esta presente na aula`;
    }
}

// testando Exemplos
console.log(alunosPresentes("Richard"));
console.log(alunosPresentes("Manuella"));
console.log(alunosPresentes("Barou"));

