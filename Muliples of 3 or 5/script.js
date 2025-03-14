const solution = (number) => {

    if(number !=0){
        let total=0;
        for(let i=0; i<number;i++){
            if(i%3 ==0 && i%5==0){
                console.log("adentro de ambos "+i)
                total+=i;
            }else if(i%3 ==0 || i%5==0){
                console.log("adentro solo en uno "+i)

                total+=i;
            }
        }
    
        return total;
    }else{
        return 0;
    }
    
}

console.log(solution(33));