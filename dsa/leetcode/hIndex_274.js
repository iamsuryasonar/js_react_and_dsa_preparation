/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    citations.sort((a,b)=>a-b);

    let len = citations.length;

    for(let i = 0;i<len;i++){
        if(citations[i] >= len-i){
            return len-i;
        }
    }

    return 0;
};
