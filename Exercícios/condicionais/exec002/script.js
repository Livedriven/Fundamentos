// Exercício 2: Compare dois valores e diga se são iguais em valor e tipo.

let valor = 12;

let valor1 = "12";

if(valor !== valor1){
    console.log(`os valores ${valor}, ${valor1} não são iguais provavelmente em valor ou em tipo `);
}
else if(valor === valor1){
    console.log(`os valores ${valor}, ${valor1} são iguais provavelmente em valor ou em tipo `)
}