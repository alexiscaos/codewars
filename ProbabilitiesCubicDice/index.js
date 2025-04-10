//Probabilities for Sums in Rolling Cubic Dice
//https://www.codewars.com/kata/probabilities-for-sums-in-rolling-cubic-dice
//Prueba commit

function rolldiceSumProb(total, matriz){
    // let dice = createDice(matriz);
    let resultados=[];
    for(let i =0;i<=dice.length;i++){
        let arrayActual = dice[i];
        if(i+1.<dice.length){
            let arrayNext = dice[i+1];
            for(let j=1;j<dice[i].length;j++){
                let suma =[];
                let number=0;
               arrayNext.forEach((element)=>{
                if(arrayActual[j]+element==total){
                    number=element;
                }
               });

               suma.push(arrayActual[j],number);
               resultados.push(suma);
            }
        }
        
    }

    return resultados;


}

function createDice(matriz){
    let dice =[];
    for(let i=0;i<matriz;i++){
        dice[i]=[];
        for(let j=0;j<6;j++){
            dice[i][j]=j+1;
        }
    }

    return dice;
}

console.log(rolldiceSumProb(8,3));