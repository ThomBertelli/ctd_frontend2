const numbers = [9, 15, 24, 32, 70]

function somar(){
    
    let soma = numbers[0] + numbers[1];

    for(let i = 1; i < numbers.length;i++){
        soma += numbers[i];
        console.log(soma);
    };      
};

somar();