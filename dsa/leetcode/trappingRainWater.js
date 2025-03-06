var trap = function (height) {
    /* 
        let n = height.length;
        let prefixArr = Array(n).fill(0);
        let suffixArr = Array(n).fill(0);
    
        prefixArr[0] = height[0];
        for (let i = 1; i < n; i++) {
            prefixArr[i] = Math.max(prefixArr[i - 1], height[i]);
        }
    
        suffixArr[n - 1] = height[n - 1];
        for (let i = n - 2; i >= 0; i--) {
            suffixArr[i] = Math.max(suffixArr[i + 1], height[i]);
        }
    
        let maxCapacity = 0;
        for (let i = 0; i < n; i++) {
            maxCapacity = maxCapacity + Math.max(0, Math.min(prefixArr[i], suffixArr[i]) - height[i]);
        }
        return maxCapacity;
    */

    /* optimised solution */

    let n = height.length;
    let previousMax = 0;
    let suffixArr = Array(n).fill(0);

    suffixArr[n - 1] = height[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        suffixArr[i] = Math.max(suffixArr[i + 1], height[i]);
    }

    let maxCapacity = 0;
    for (let i = 0; i < n; i++) {
        maxCapacity = maxCapacity + Math.max(0, Math.min(previousMax, suffixArr[i]) - height[i]);
        previousMax = Math.max(previousMax, height[i]);
    }
    return maxCapacity;
};