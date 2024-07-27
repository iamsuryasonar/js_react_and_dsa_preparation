/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */

var minDistance = function(word1, word2) {
    let memo = {};

    function helper(i, j) {
        let key = `${i}_${j}`
        
        let len1 = word1.length;
        let len2 = word2.length;

        if(i===len1){
            return len2-j;
        }

        if(j===len2){
            return len1-i;
        }

        if(memo[key]!==undefined) return memo[key];

        if(word1[i] === word2[j]){
            return helper(i+1,j+1);
        }else{
            let insert = 1 + helper(i, j+1);

            let replace = 1 + helper(i+1, j+1);
            
            let remove = 1 + helper(i+1, j);
            
            return memo[key] =  Math.min(insert, replace, remove);
        }
    }
    
    return helper(0, 0);
};
