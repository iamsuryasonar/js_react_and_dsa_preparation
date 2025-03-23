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


// var longestOnes = function (nums, k) {

//     let maxLen = 0;
//     let maxF = 0;
//     let i = 0;
//     let j = 0;
//     let map = new Map();

//     while (j < nums.length) {
//         map.set(nums[j], (map.get(nums[j])|| 0) + 1);
//         maxF = map.get(1)||0;

//         let changes = (j - i + 1) - maxF;

//         if (changes <= k) {
//             maxLen = Math.max(maxLen, j - i + 1);
//         } else {
//             map.set(nums[i], map.get(nums[i]) - 1);
//             if (map.get(nums[i]) === 0) map.delete(nums[i]);
//             maxF = map.get(1)||0;
//             i++;
//         }
//         j++;
//     }

//     return maxLen;
// };

