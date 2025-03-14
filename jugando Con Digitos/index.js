function digPow(n, p){
    let cadena = n.toString();
    let subtotal = 0;
    let k=0;
    if((Number.isInteger(n)&& Number.isInteger(p))&&(Math.sign(n)!=-1 && Math.sign(p)!=-1)){
        for(let i=0; i<cadena.length;i++){
            subtotal+=Math.pow(cadena[i], p+i);
        }
    }else{
        return console.log(-1);
    }
    k = subtotal/n;
    if((n*k)==subtotal){
        return console.log(k);
    }else{
        return console.log(-2);
    }


}

digPow(3263.10819218804, 9);