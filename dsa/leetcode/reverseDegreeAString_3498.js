/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
    let sum = 0;
    for(let i = 0; i<s.length;i++){
        let currCode = s[i].charCodeAt(0) - 'a'.charCodeAt(0);
        
        let revCode = Math.abs(currCode - 26);
        sum  = sum+(revCode*(i+1));
    }
    
    return sum;
};
