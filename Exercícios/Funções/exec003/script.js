// Exercício 3: Crie uma função que receba 3 notas e retorne a média. 
// Com base nisso, retorne "Aprovado", "Recuperação" ou "Reprovado".

const mediaNota = function(n, n2, n3){
        let media = (n + n2 + n3)/ 3;
    if (
        typeof n1 === "string" || isNaN(n) ||
        typeof n2 === "string" || isNaN(n2) ||
        typeof n3 === "string" || isNaN(n3)
    ) {
        return "Nota inválida";
    }
    else{
        if(media === 10){
            return "Parabens esta e a maior nota"
        }
        else if(media >= 6){
            return "Aprovado"
        }
        else if(media >= 4){
            return "Recuperação";
        }
        else{
            return "reprovado";
        }
    }
}

console.log(mediaNota(10, 10, 10));