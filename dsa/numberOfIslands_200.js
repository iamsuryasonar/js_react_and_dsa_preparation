/**
 * @param {character[][]} grid
 * @return {number}
 */


// function dfs(grid, visited, row, col){
//     if(visited.includes(row+'_'+col) ) return;
//     if(grid[row][col] === '0') return;

//     visited.push(row+'_'+col);

//     if(row+1<grid.length){
//         dfs(grid, visited, row+1, col)
//     }
//     if(row-1>=0){
//         dfs(grid, visited, row-1, col)
//     }
//     if(col+1<grid[0].length){
//         dfs(grid, visited, row, col+1)
//     }
//     if(col-1>=0){
//         dfs(grid, visited, row, col-1)
//     }

//     return;
// }

// var numIslands = function(grid) {
//     let visited = [];
//     let count = 0;

//     for(let row = 0;row<grid.length;row++){
//         for(let col = 0;col<grid[0].length;col++){
//             if(grid[row][col]==='1'){
//                 if(!visited.includes(row+'_'+col) ){
//                     count++;
//                     dfs(grid, visited, row, col);
//                 }
//             }
//         }
//     }
//     return count;
// };


// without using visited array
function dfs(grid, row, col){
    if(grid[row][col] === '0') return;

    grid[row][col] = '0' // directly updating land to water.

    if(row+1<grid.length){
        dfs(grid, row+1, col)
    }
    if(row-1>=0){
        dfs(grid, row-1, col)
    }
    if(col+1<grid[0].length){
        dfs(grid, row, col+1)
    }
    if(col-1>=0){
        dfs(grid, row, col-1)
    }

    return;
}

var numIslands = function(grid) {
    
    let count = 0;

    for(let row = 0;row<grid.length;row++){
        for(let col = 0;col<grid[0].length;col++){
            if(grid[row][col]==='1'){
                dfs(grid, row, col);
                count++;
            }
        }
    }
    return count;
};
