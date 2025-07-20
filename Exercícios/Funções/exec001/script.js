// Funções Exercício 1: Crie uma função que receba nome e idade.
// Se a idade for maior ou igual a 18, retorne "Bem-vindo, [nome]!".
//  Caso contrário, "Acesso negado para [nome]".

function verificarAcesso(nome, idade) {
  if (typeof idade !== "number" || idade < 0) {
    return "Idade inválida.";
  }

  return idade >= 18
    ? `Bem-vindo, ${nome}!`
    : `Acesso negado para ${nome}.`;
}

// Exemplo de uso:
const resultado = verificarAcesso("Richard", 17);
console.log(resultado);
