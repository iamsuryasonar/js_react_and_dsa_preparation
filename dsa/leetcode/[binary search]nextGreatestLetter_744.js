/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let l = 0;
    let r = letters.length;
    let mid;
    let ans = 0;

    while(l<r){
        mid = l+Math.floor((r-l)/2);

        if(target.charCodeAt(0)<letters[mid].charCodeAt(0)){
            ans = mid;
            r = mid;
        }else{
            l = mid+1;
        }
    }

    return letters[ans];
};
