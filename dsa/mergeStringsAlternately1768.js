var mergeAlternately = function(word1, word2){

    // let result = '';
    // let i = 0;
    // let j = 0;
    // while(i<word1.length && j<word2.length){
    //     result+=word1[i]+word2[j]
    //     i++;
    //     j++;
    // }
    // while(i<word1.length){
    //     result+=word1[i]
    //     i++;
    // }
    // while(j<word2.length){
    //     result+=word2[j]
    //     j++;
    // }

    // return result;

    // let result = '';
    // for(let i = 0; i<Math.max(word1.length,word2.length); i++){
    //     result += (word1[i]||'')+(word2[i]||'');
    // }
    //return result;


    let result = [];
    for(let i = 0; i<Math.max(word1.length,word2.length); i++){
        result.push(word1[i])
        result.push(word2[i]);
    }

    return result.join('');
};
