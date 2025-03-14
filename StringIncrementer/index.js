function incrementString(string){
    // string.split(/\d/);
    if(typeof parseInt(string[string.length-1])==="number"){
        let contador=0;
        string.split(/\d/).map((x)=>{if(x==""){contador++}});

        console.log(parseInt(number)+8);

        for(let i=contador;i<string.length;i++){
            if(string[i]!=0){
                console.log(string[i]);
                number+=parseInt(string[i]);
            }
        }
        return string.split(/[1-9]/)[0]+(parseInt(number)+1 );
    }else{
        return string+="1";

    }
}

console.log(incrementString("foo099"));