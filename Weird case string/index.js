function toWeirdCase(string){
    let arr = string.split(" ");
    let finalStr="";
    for(let i = 0; i<arr.length; i++){
        for(let j = 0; j<arr[i].length; j++){
            if(j%2==0){
                finalStr+=arr[i][j].toUpperCase();
            }else{
                finalStr+=arr[i][j].toLowerCase();
            }
        }
        finalStr+=" ";
    }
    return finalStr.trim();
}

toWeirdCase("String");