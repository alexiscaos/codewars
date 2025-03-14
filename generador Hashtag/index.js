function generateHashtag (str) {
    let array = str.trim().split("");
    array = Mayus(array);
    array = array.filter(element => element.trim()!== "");
    if(array.length<140 && str.trim()!=""){

        let string ="#";
        for(let i = 0; i<array.length;i++){
            string+=array[i];
        }
        return console.log(string);
    }else{
        return console.log(false);
    }
   
}

const Mayus = (arr) => {
    for(let i =0 ; i<arr.length;i++){
        arr[0]= arr[0].toUpperCase();
        if(arr[i]==" "){
            arr[i+1]=arr[i+1].toUpperCase();
        }
    }

    return arr;
};

let string =( "a".repeat(140));
generateHashtag(string);