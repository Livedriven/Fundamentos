// Exercício 3: Cria um array com notas.
//  Usa o .filter para pegar só as notas maiores ou iguais a 7.
//  Depois, calcula a média delas.

let notas = [10, 2, 5, 6, 7, 8, 6.5, 7.6, 10];

const mediaNotas = (notas) => {
    let notasAltas = notas.filter(n => n >= 7);

    if (notasAltas.length === 0) {
        return "Nenhuma nota foi igual ou superior a 7.";
    }
    
    let soma = notasAltas.reduce((total,nota) => total + nota, 0);
    let media = soma / notasAltas.length;

    return `a media das maiores notas é ${media.toFixed(2)}`;
}
    
console.log(mediaNotas(notas));