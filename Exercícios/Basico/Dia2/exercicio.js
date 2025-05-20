
let a = "5" // Uma variavel abrigando um valor do tipo string

let b = 4 // Outra variavel só que com valor do tipo numerico

console.log(a + b); /*  o resultado sera 54 em vez de 9 pois o 
                        JavaScript levou em consideração que eu quero somente 
                        exibir os dois valores sem fazer uma operação*/

console.log(Number(a)+ b); //ja aqui o resultado sera 9 porque eu converti a variavel do tipo string para numerico