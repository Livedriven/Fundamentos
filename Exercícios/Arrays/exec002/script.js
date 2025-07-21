// Exercício 2: Cria um array com valores de compras. 
// Depois, faz uma função que retorna o total gasto, e diga se passou do limite de R$100 usando reduce.

let compras = [30, 20, 10, 25, 2];
const limite = 100

const calculandoGastos = function(listaCompras){
    let totalCompras = listaCompras.reduce((acc, valor) => acc + valor, 0);
    const limite = 100;
    let diferenca = totalCompras - limite;

    if(diferenca > 0){
        return `⚠️ Você ultrapassou o limite em R$ ${diferenca.toFixed(2)}. Total gasto: R$ ${totalCompras.toFixed(2)}`;
    }
    else{
        return `✅ Tudo certo! Você ainda tem R$ ${Math.abs(diferenca).toFixed(2)}. Total gasto: R$ ${totalCompras.toFixed(2)}`;
    }
}
console.log(calculandoGastos(compras));