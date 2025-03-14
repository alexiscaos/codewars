    function moveZeros(arr) {
        // let array1=[];
        // let esctructura= (arr.find((element)=> element==0));
        // array1.push(esctructura);
        // return console.log(array1);
        // console.log(arr);

        for(let i = 0; i <arr.length;i++){
            if (arr[i]==0){
                // let cero =arr[i];
                arr.splice(i,0,arr[i+1]);
                // arr.push(0);
                // console.log(arr);
                console.log(arr);


            }
        }
    }

    const array1 = [1,0,1,2,0,1,3,"a"];
    moveZeros(array1);