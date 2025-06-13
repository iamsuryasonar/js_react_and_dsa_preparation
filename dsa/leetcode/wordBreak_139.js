var wordBreak = function (s, wordDict) {
    let wordSet = new Set(wordDict);

    function helper(index, memo = {}) {
        if(index>=s.length) return true;

        if (memo[index]) return memo[index];

        for (let i = index; i < s.length; i++) {
            let substring = s.substring(index, i+1);

            if (wordSet.has(substring) && helper(i+1, memo)) {
                memo[index] = true;
                return memo[index];
            }
        }
        memo[index] = false;
        return memo[index];
    }

    return helper(0);
};
