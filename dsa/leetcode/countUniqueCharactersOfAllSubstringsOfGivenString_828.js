// Brute force approach
var uniqueLetterString = function(s) {
    function getSubString(s){
        let subString = [];
        
        for(let i = 0;i<s.length;i++){
            for(let j = i;j<s.length;j++){
                subString.push(s.substring(i,j+1));
            }
        }
        
        return subString;
    }

    let subStrings = getSubString(s);

    let result = 0;

    for(let i = 0;i<subStrings.length;i++){
        result += countUniqueChars(subStrings[i]);
    }

    function countUniqueChars(t){
        let map = new Map();
        let uniqueCount=0;

        for(let i = 0;i<t.length;i++){
            map.set(t[i],(map.get(t[i])||0)+1);
        }

        for(let i = 0;i<t.length;i++){
            if(map.get(t[i]) === 1){
                uniqueCount++;
            }
        }
        return uniqueCount;
    }

    return result;
};
