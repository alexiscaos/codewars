function isSolved(board) {
    let countSpaces=0;
    for(let i = 0; i<board.length;i++){
        for(let j=0;j<board[i].length;j++){
            if(board[i][j]==0){
                countSpaces++;
            }
        }
    }

    if(countSpaces>=1){
        return -1;
    }
}

console.log(isSolved([[0,0,1],
    [0,1,2]
    [2,1,0]]));