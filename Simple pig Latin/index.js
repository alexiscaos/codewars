function pigIt(str){
    let array = str.split(' ');
    let string="";
    for(let i=0; i<array.length; i++){
        if (/^[a-zA-Z]+$/.test(array[i])){
            string+=array[i].slice(1,array[i].legnth)+array[i][0] +"ay ";

        }else{
            string+= array[i]+" "
        }

    }
    console.log(string);

}

let string =('Pig latin is cool');
pigIt(string);