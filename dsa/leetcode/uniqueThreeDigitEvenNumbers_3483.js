var totalNumbers = function(digits) {
    
    let count = 0;
    let set = new Set();
    
    for(let i = 0; i<digits.length;i++){
        for(let j = 0; j<digits.length;j++){
            if(i===j) continue;
            for(let k = 0; k<digits.length;k++){
                if(j!==k && i!==k && digits[k]%2===0 && digits[i]!==0) {
                    set.add(digits[i]+''+digits[j]+''+digits[k]);
                }
            }   
        }
    }
    
    
    return set.size;
};
