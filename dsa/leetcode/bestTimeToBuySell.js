
var maxProfit = function (prices) {
    // Brute force approach

    /* let max = Number.MIN_VALUE;
    for(let i=0;i<prices.length ; i++){
     for(let j=i;j<prices.length ; j++){
         max = Math.max(max,prices[j]-prices[i])
     }
    }
    return max;
    */
    /* 
    using space
    let max = Number.MIN_VALUE;
    let suffix = Array(prices.length).fill(0);

    for(let i=prices.length-1;i>=0;i--){
        if(i === prices.length-1){
            suffix[i] = prices[i]
        }else{
            suffix[i] = Math.max(prices[i],suffix[i+1])
        }
    }

    for(let i=0; i<prices.length; i++){
        max = Math.max(max,suffix[i]-prices[i])
    }

    return max; 
    */

    /*
    //  Optimised solution
    let max=0;
    let left=0;
    let right=0;

    while(right<prices.length){
        max = Math.max(prices[right] - prices[left],max);
        if(prices[right]-prices[left]<0) {
            left = right;
        }
        right++;
    }

    return max;
    */

    // optimised (time complexity - O(n))
    let max = Number.MIN_VALUE;
    let minSoFar = prices[0];

    for (let i = 0; i < prices.length; i++) {
        minSoFar = Math.min(minSoFar, prices[i])
        max = Math.max(prices[i] - minSoFar, max)
    }

    return max;
};
