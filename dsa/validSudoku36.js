var isValidSudoku = function(board) {
    for(let i=0;i<board.length;i++){
        let setRow = new Set();
        let setCol = new Set();
        
        for(let j = 0;j<board.length;j++){
            if(board[i][j] !== ".") {
                // is duplicate exist in row 
                if(setRow.has(board[i][j])){
                    return false;
                }else{
                    setRow.add(board[i][j])
                }
            }

            if(board[j][i] !== "."){
                // is duplicate exist in col 
                if(setCol.has(board[j][i])){
                    return false;
                }else{
                    setCol.add(board[j][i])
                }
            }
        }
    }

    // find duplicates in each grid
    for(let i = 0;i<board.length;i+=3){
        for(let j = 0;j<board.length;j+=3){
            let setGrid = new Set();
            for(let k = i;k<i+3;k++){
                for(let l = j;l<j+3;l++){
                    if(board[k][l] === ".") continue;
                    if(setGrid.has(board[k][l])){
                        return false;
                    }else{
                        setGrid.add(board[k][l])
                    }
                }
            }
        }
    }
    return true;
};
