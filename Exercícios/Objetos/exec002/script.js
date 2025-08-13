// Exercício 2: Cria um array de objetos com nome, preço e disponibilidade. 
// Faz funções que listam só os produtos disponíveis e somam o valor total dos disponíveis.
//Formatar os valores como moeda BRL usando Intl.NumberFormat.

const produtos = [
  { nome: 'Camiseta Dry Fit', preco: 59.90, disponibilidade: true },
  { nome: 'Tênis Corrida Pro', preco: 299.99, disponibilidade: false },
  { nome: 'Garrafa Térmica 1L', preco: 89.50, disponibilidade: true },
  { nome: 'Meia Esportiva Pack 3', preco: 25.00, disponibilidade: true },
  { nome: 'Relógio Digital', preco: 199.90, disponibilidade: false },
  { nome: 'Jaqueta Corta-Vento', preco: 149.99, disponibilidade: true }
]

function filtrarDisponiveis (lista) {
    const disponiveis = lista.filter(d => d.disponibilidade === true);

    return disponiveis;
}

function valorTotal(lista, callback) {
    const somaTotal = callback(lista).reduce((total, atual) => total + atual.preco, 0);

    const formatado = new Intl.NumberFormat('pt-br', {
        style: "currency",
        currency: 'BRL'
    }).format(somaTotal)

    return `O valor total de todos os produtos disponiveis atualmente esta em ${formatado}`;
}

const resultado = valorTotal(produtos, filtrarDisponiveis);

console.log(resultado);

//Criar função que retorna apenas os nomes dos produtos disponíveis.





//Contar quantos produtos estão disponíveis e indisponíveis.





//Aplicar desconto de 10% em todos os produtos disponíveis e retornar os novos preços.




//Ordenar os produtos disponíveis por preço (menor pra maior).

