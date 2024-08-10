var floodFill = function(image, sr, sc, color) {
    let visited = {};
    let prevColor = image[sr][sc];
    let rowLen = image.length;
    let colLen = image[0].length;

    function helper(sr, sc){
        let key = `${sr}_${sc}`;

        if(visited[key]!==undefined) return;
        if(image[sr][sc] !== prevColor) return;

        visited[key] = true;
        if(image[sr][sc] === prevColor) {
            image[sr][sc] = color;
        }

        if(sr<rowLen-1){
            helper(sr+1,sc);
        }

        if(sr>0){
            helper(sr-1,sc)
        }

        if(sc<colLen-1){
            helper(sr,sc+1);
        }

        if(sc>0){
            helper(sr,sc-1)
        }
    }

    helper(sr,sc);
    return image;
};
