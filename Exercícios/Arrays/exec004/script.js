// Exercício 4: Cria um array de 1 a 50. Filtra e retorna só os números primos usando uma função auxiliar com for.

const numeros = Array.from({ length: 50 }, (_, i) => i + 1);

function ehPrimo(n) {
    if(n < 2){
        return false;
    }

    for(let i = 2; i <= Math.sqrt(n); i ++){
        if(n % i === 0){
            return false;
        }
    }
    return true
}



const filtrando = (lista) =>{
    let primos = [];

    for(let i = 0; i < lista.length; i ++){
        if(ehPrimo(lista[i])){
            primos.push(lista[i]);
        }
    }

   
    return `🧠 Números primos entre 1 e 50: ${primos.join(", ")}`;
}

console.log(filtrando(numeros));