function csvFormat(str) {
    let matriz = str.split("\n");
    let arr = [1,3,5,7];
    let finalArr = [];
    let string = "";

    
    for (let fila of matriz) {
        let subArray = fila.split(",");
        subArray.forEach((num, index) => {
            if (arr.includes(index)) {
                finalArr.push(num);
            }
        });
        string+=finalArr+"\n";
        finalArr=[];
    }

    return string.trim();
}


// const numbers = [1, 2, 3, 4];
// const filteredNumbers = numbers.map((num, index) => {
//   if (index < 3) {
//     return console.log(num);
//   }
// });
console.log(csvFormat("a,b,c,d,e\n1,2,3,4,5\nf,g,h,i,j"));

