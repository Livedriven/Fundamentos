// Exercício 4: Faça um mini cálculo de IMC e diga a categoria (abaixo do peso, normal, etc).

let peso = 72;

let altura = 1.70;

let imc = peso/(altura**2); // declarando uma variavel para realizar a operação de imc

resultado = "";

if(isNaN(imc)) // verificando se o resultado do imc e realmente um número para evitar erros
{
    resultado = "número invalido";
}

//condições caso o if acima seja falso

else{
    if(imc < 18.5){
        resultado = "de acordo com o imc você esta abaixo do peso";
    }
    else if(imc >= 18.5 && imc <= 24.9){
        resultado = "de acordo com o imc você esta no peso normal";
    }
    else if(imc >= 25 && imc <= 29.9){
        resultado = "de acordo com o imc você esta em sobrepeso";
    }
    else if(imc >= 30 && imc <= 34.9){
        resultado = "de acordo com o imc você esta com obesidade grau 1";
    }
    else if(imc >= 35 && imc <= 39.9){
        resultado = "de acordo com o imc você esta com obesidade grau 2 ";
    }
    else if(imc >= 40){
        resultado = "de acordo com o imc você esta com Obesidade grau 3 (grave)";
    }
}

console.log(resultado);