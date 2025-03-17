/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {

    // let len = s.length;
    // let count = 0;
    
    // for(let i = 0;i<len;i++){
    //     let map = new Map();
    //     let maxFreq = 0;
    //     for(let j = i;j<len;j++){
    //         map.set(s[j],(map.get(s[j])||0)+1);
    //         maxFreq = Math.max(maxFreq,map.get(s[j]));
    //         if((j-i+1 - maxFreq) <= k){
    //             count = Math.max(count, j-i+1);
    //         }else{
    //             break;
    //         }
    //     }
    // }

    // return count;

    let len = s.length;
    let count = 0;
    let i = 0;
    let j = 0;
    let maxFreq = 0;
    let map = new Map();

    while(j<len){
        
        map.set(s[j],(map.get(s[j])||0)+1);
        maxFreq = Math.max(maxFreq,map.get(s[j]));

        while((j-i+1)- maxFreq > k){
            map.set(s[i],map.get(s[i])-1);
            if(map.get(s[i]) === 0) map.delete(s[i]);
            maxFreq = Math.max(...Array.from(map.values()));
            i++;
        }

        if((j-i+1)- maxFreq <= k){
            count = Math.max(count,j-i+1);
        }
        
        j++;
    }

    return count;
};
