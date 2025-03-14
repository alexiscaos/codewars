function persistence(num) {
    let finalNumber=1;
    let count=0;
    do{
        if(num.toString().length<=1){
            return console.log(0);
        }else{
            for(let i=0; i<num.toString().length;i++){
                finalNumber*=parseInt(num.toString()[i]);
            }
            num=finalNumber;
            finalNumber=1;
            count++;

        }
    }while(num.toString().length>1);

    return console.log(count);
}

 persistence(9);