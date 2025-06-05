/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let result = [];

    function helper(start,sum,combination) {
        if(sum>target){
            return;
        }

        if (sum === target) {
            result.push([...combination]);
            return;
        }

        for(let i = start;i<candidates.length;i++){
            combination.push(candidates[i]);
            helper(i,sum+candidates[i],combination);
            combination.pop();
        }
    }

    helper(0,0,[]);
    return result;
};
