function bouncingBall(h,  bounce,  window) {

    if(h>0 && bounce>0 &&  bounce<1 && window < h){
        let altura=h;
        let conteo = 1;
       do{ 
        altura*=bounce;
        if(altura>window){
            conteo+=2;
        }
       }while(altura>window);

       return conteo;
    }else{
        return -1;
    }
}

bouncingBall(1, 0.66 ,1.5 );
