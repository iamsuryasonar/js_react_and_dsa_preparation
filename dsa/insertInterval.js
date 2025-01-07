
var insert = function (intervals, newInterval) {
    let result = [];

    for (const interval of intervals) {
        if (interval[1] < newInterval[0]) {
            result.push(interval);
        } else if (newInterval[1] < interval[0]) {
            result.push(newInterval);
            newInterval = interval;
        } else {
            newInterval[0] = Math.min(interval[0], newInterval[0])
            newInterval[1] = Math.max(interval[1], newInterval[1])
        }
    }
    result.push(newInterval)
    return result;
};