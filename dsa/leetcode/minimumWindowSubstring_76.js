/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    // let result = "";
    // let count = Infinity;

    // for(let i = 0 ; i<s.length;i++){
    //     for(let j=i; j<s.length;j++){
    //         let map = new Map();
    //         for(let k=0; k<t.length;k++){
    //             map.set(t[k],(map.get(t[k])||0)+1);
    //         }
    //         if(j-i+1>=t.length){
    //             let arr = s.slice(i,j+1);
    //             for(let k=0; k<arr.length;k++){
    //                 if(!map.has(arr[k])) continue;
    //                 map.set(arr[k],map.get(arr[k])-1);
    //                 if(map.get(arr[k])===0) map.delete(arr[k]);
    //             }

    //             if(map.size===0) {
    //                 if(count>arr.length){
    //                     count = arr.length;
    //                     result = arr;
    //                 }
    //             };
    //         }
    //     }
    // }
    // return count=== 0?"":result;

    let left=0;
    let right=0;
    let maxLen = Infinity;
    let startIndex = 0;
    let have = 0;

    let freqT = new Map();
    for(let k=0; k<t.length;k++){
        freqT.set(t[k],(freqT.get(t[k])||0)+1);
    }
    let required = freqT.size;

    let windowFreq = new Map();

    while(right<s.length){
        
        windowFreq.set(s[right],(windowFreq.get(s[right])||0)+1);

        if(freqT.has(s[right]) && freqT.get(s[right]) === windowFreq.get(s[right])) have++;

        while(have === required){

            if(right-left+1 < maxLen){
                maxLen = right-left+1;
                startIndex = left;
            }
            
            windowFreq.set(s[left],windowFreq.get(s[left])-1);
            if(freqT.has(s[left]) && freqT.get(s[left]) > windowFreq.get(s[left])) have--;

            if(windowFreq.get(s[left])===0) windowFreq.delete(s[left]);
            
            left++;
        }

        right++;
    }

    if(maxLen!==Infinity){
        return s.slice(startIndex,startIndex+maxLen);
    }else{
        return "";
    }
};
