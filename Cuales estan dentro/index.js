function inArray(array1,array2){
    let finalArray=[];
    for(let i = 0; i<array2.length; i++){
       for(let j = 0; j<array1.length;j++){
            if(array2[i].includes(array1[j])&& !finalArray.includes(array1[j])){
            finalArray.push(array1[j]);
        }
       }

    }
    return console.log(finalArray.sort());
}




let a1 = ["arp", "live", "strong"];

let a2 = ["lively", "alive", "harp", "sharp", "armstrong"];

inArray(a1,a2);

function inArray(array1,array2){
    let finalArray=[];
    for(let i = 0; i<array1.length; i++){
       for(let j = 0; j<array2.length;j++){
            if(array2[j].includes(array1[i])&& !finalArray.includes(array1[i])){
            finalArray.push(array1[i]);
        }
       }
    }
    return finalArray.sort();
}

// let hola = "hola";
// let ahola = "holaA";
// if(ahola.endsWith(hola)){
//     console.log(hola);
// }
