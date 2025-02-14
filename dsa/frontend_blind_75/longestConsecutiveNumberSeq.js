function longestConsecutiveNumberSeq(numbers) {
  let longest = 1;
    
    if(numbers.length ===1) return longest;
    
    numbers.sort((a,b)=>a-b)
    
    let currStreak = 1;
    
    for(let i = 0;i<numbers.length;i++){
        if(numbers[i-1]===numbers[i]) continue;
        
        if(numbers[i] === numbers[i-1]+1){
            currStreak++;
        }else{
            longest = Math.max(longest,currStreak);
            currStreak = 1;
        }
    }
    longest = Math.max(longest,currStreak);
    return longest;
}
