// Exercício 2:
// Crie uma função que receba dois valores como string, 
// converta-os para número e realize as quatro operações básicas. 
// Mostre os resultados. Se não forem números válidos, retorne erro.

function calcularOperacoes(valor1, valor2) {
  const num1 = Number(valor1);
  const num2 = Number(valor2);

  const valoresInvalidos = isNaN(num1) || isNaN(num2);

  if (valoresInvalidos) {
    return "Erro: Um ou ambos os valores são inválidos.";
  }

  return {
    soma: num1 + num2,
    subtracao: num1 - num2,
    multiplicacao: num1 * num2,
    divisao: num2 !== 0 ? num1 / num2 : "Divisão por zero não é permitida"
  };
}

// Exemplo de uso:
const resultado = calcularOperacoes("10", "20");

if(typeof resultado === "string"){
    console.log(resultado);
}
else{
    console.log("Resultados:");
    console.log(`Soma: ${resultado.soma}`);
    console.log(`Subtração: ${resultado.subtracao}`);
    console.log(`Multiplicação: ${resultado.multiplicacao}`);
    console.log(`Divisão: ${resultado.divisao}`);
}