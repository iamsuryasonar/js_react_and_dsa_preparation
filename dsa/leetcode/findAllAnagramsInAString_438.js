/*
Slide the window and check if current window is an anagram.

To optimise use 2 maps to keep track of frequencies of char in window and in the p string, while adding each char to the window we check if its frequency in the window and in the p string are equal, if they are equal we check if both map are equal, and equal means its an anagram.
*/
  
var findAnagrams = function(s, p) {
    let pFreq = new Map();

    // populate frequency of p, for later to compare freqency with sFreq(to check if window is anagram)
    for(let i = 0;i<p.length;i++){
        pFreq.has(p[i])?pFreq.set(p[i],pFreq.get(p[i])+1):pFreq.set(p[i],1);
    }

    let sFreq = new Map();
    let res = []
    let start = 0;

    for(let end = 0;end<s.length;end++){

        // populate sFreq with chars and its frequency in a window
        if(sFreq.has(s[end])){
            sFreq.set(s[end],sFreq.get(s[end])+1);
        }else{
            sFreq.set(s[end],1);
        }

        // if pFreq has the current char (if it doesnot have the current char it can't be a anagram)
        if(pFreq.has(s[end])){
            // if window is filled (window has to be equal to length of p, for them to anagram)
            if(end - start === p.length-1){
                // if frequency of current char maches that char in pFreq,
                // then check if two map are equal
                // if equal push start, since thats a anagram
                // basically we are checking if anagram here
                if(sFreq.get(s[end]) === pFreq.get(s[end])){
                    let count = 0;
                    for(let [key,value] of sFreq){
                        if(pFreq.get(key) === value){
                            count++;
                        }
                    }
                    if(count === pFreq.size){
                        res.push(start)
                    }
                }

                // remove char in start from the map, to shift one character right in window(sliding the window)
                let item = sFreq.get(s[start]);
                if(item===1){
                    sFreq.delete(s[start]);
                }else{
                    sFreq.set(s[start],sFreq.get(s[start])-1);
                }
                
                start++;
            }
        }else{ 
            // if pFreq does not have the current char then empty the window as well as sFreq map
            // it makes no sense to carry the current char if it is not present in string p
            start = end+1;
            sFreq = new Map();
        }
    }

    return res;
};



/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

// Another solution
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    let strMap = new Map();
    let pMap = new Map();
    let i = 0;
    let j = 0;
    let result = [];
    let totalFreq = 0;

    for (let i = 0; i < p.length; i++) {
        pMap.set(p[i], (pMap.get(p[i]) || 0) + 1);
    }

    while (j < s.length) {  
        if (pMap.has(s[j])) {
            strMap.set(s[j], (strMap.get(s[j]) || 0) + 1);
            totalFreq++;
        } else {
            j++;
            i = j;
            totalFreq = 0;
            strMap.clear();
            continue;
        }

        if ((j - i + 1) === p.length && totalFreq === p.length) {
            if (isMapEqual(pMap, strMap)) {
                result.push(i);
            }
            if(pMap.has(s[i])) totalFreq--;
            strMap.set(s[i], (strMap.get(s[i]) || 0) - 1);
            if (strMap.get(s[i]) === 0) strMap.delete(s[i]);
            i++;

        }
        j++;
    }

    function isMapEqual(pMap, strMap) {
        if (strMap.size !== strMap.size) return false;

        let pArray = Array.from(pMap.keys());

        for (let i = 0; i < pArray.length; i++) {
            if (pMap.get(pArray[i]) !== strMap.get(pArray[i])) {
                return false;
            }
        }
        return true;
    }

    return result;
};
