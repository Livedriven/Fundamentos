// Exercício 3: Crie um sistema de nota que retorna “Aprovado”, “Recuperação” ou “Reprovado”.

let nota = 2;

let nota1 = 10;

let nota2 = 3;

let media = (nota + nota1 + nota2)/3;

let resultado = "";


if(isNaN(media)) // verificando se a nota que sera usada e realmente um número
{
    resultado = "número invalido"; 
}
else // estruturando as condições para caso a nota seja realmente um número
{
    if(media === 10){
        resultado = "parabens você tirou 10";
    }
    else if(media >= 7){
        resultado = "você esta aprovado";
    }
    else if(media >= 4 && media <= 6){
        resultado = "você esta de recuperação";
    }
    else{
        resultado = "você esta reprovado";
    }
}

console.log(resultado);