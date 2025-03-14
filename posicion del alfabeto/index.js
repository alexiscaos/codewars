

function alphabetPosition(text) {
    text = text.replace(/ /g,"").toLowerCase();
    let array = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p"
        ,"q","r","s","t","u","v","w","x","y","z"
    ]

    let newString="";
    for(let i = 0;i<text.length;i++){
        for(let j=0; j<array.length;j++){
            if(text[i]==array[j]){
                newString+=j+1+" ";
            }
        }
    }

    return newString.trim();
}

const str = "The sunset sets at twelve o' clock.";
alphabetPosition(str);
// 20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11