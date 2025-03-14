    function solution(string) {
        let array ="";
        for(let i = 0; i<string.length; i++){
            if(esMayuscula(string[i])){
                array += " "+string[i];
            }else{
                array += string[i];
            }
        }
        return console.log(array);
    }
    
    let esMayuscula = (letra) => letra ===(letra.toUpperCase());
solution("HolaComoEstas");