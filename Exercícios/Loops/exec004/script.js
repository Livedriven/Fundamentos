// Exercício 4: Liste todos os números primos entre 1 e 50 usando for.

for(let i = 2; i <= 50; i ++){
    let primo = true;

    for(let j = 2; j < i; j ++){
        if(i % j === 0){
            primo = false;
            break;
        }
    }

    if(primo === true){
        console.log(i);
    }
}