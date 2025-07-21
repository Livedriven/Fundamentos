// Objetos Exercício 1: Cria um array de objetos,
// cada objeto representa um usuário com nome, idade e habilidades.
// Depois, cria uma função que retorna apenas os usuários com mais de 18 anos e que saibam "JavaScript".]

const usuarios = [
  { nome: 'Lucas Andrade', idade: 17, habilidades: ['HTML', 'CSS'] },
  { nome: 'Beatriz Costa', idade: 19, habilidades: ['JavaScript', 'Python', 'Node.js'] },
  { nome: 'Rafael Souza', idade: 22, habilidades: ['C', 'Java'] },
  { nome: 'Manuella Maia', idade: 18, habilidades: ['JavaScript', 'React'] },
  { nome: 'Enzo Rocha', idade: 16, habilidades: ['HTML'] },
  { nome: 'Clara Lima', idade: 21, habilidades: ['JavaScript', 'HTML', 'CSS'] },
  { nome: 'Diego Martins', idade: 24, habilidades: ['Ruby', 'Python'] }
]

function selecionados(lista) {
    const filtrados = lista.filter(usuario => usuario.idade >= 18 && usuario.habilidades.includes("JavaScript"));

    const nomes = filtrados.map(u => `${u.nome} (${u.idade} anos)`).join(", ")

    return `Os selecionados foram: ${nomes}`;
}

let resultado = selecionados(usuarios);

console.log(resultado);