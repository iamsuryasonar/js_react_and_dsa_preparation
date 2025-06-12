/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    function helper(index, memo = {}) {
        if (memo[index]) return memo[index];

        if (index === s.length) {
            return 1;
        }

        if (s[index] === '0') return 0;

        let ways = 0;
        ways = helper( index + 1, memo);

        if (index+2 <= s.length && parseInt(s.substring(index,index+2)) <= 26) {
            ways += helper(index + 2, memo);
        }

        return memo[index] = ways;
    }

    let result = helper(0);
    return result;
};
