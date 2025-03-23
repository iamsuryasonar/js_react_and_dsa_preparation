var longestOnes = function (nums, k) {
    let maxLen = 0;
    let maxF1 = 0;
    let i = 0;
    let j = 0;
    let map = new Map();

    while (j < nums.length) {

        if (nums[j] === 1){
            maxF1++;
        }

        let changes = (j - i + 1) - maxF1;

        if (changes <= k) {
            maxLen = Math.max(maxLen, j - i + 1);
        } else {
            if (nums[i] === 1){
                maxF1--;
            }

            i++;
        }
        j++;
    }

    return maxLen;

};
