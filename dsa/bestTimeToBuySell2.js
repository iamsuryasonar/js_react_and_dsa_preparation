
var maxProfit = function (prices) {
    let maxProfit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i - 1] < prices[i]) {
            maxProfit = maxProfit + prices[i] - prices[i - 1]
        }
    }
    return maxProfit
};