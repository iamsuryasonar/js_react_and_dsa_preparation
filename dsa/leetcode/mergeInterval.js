
var merge = function (intervals) {
    intervals = intervals.sort((a, b) => a[0] - b[0])
    let result = [];

    let prevInterval = intervals[0];

    for (const interval of intervals) {
        if (prevInterval[1] < interval[0]) {
            result.push(prevInterval);
            prevInterval = interval;
        } else {
            prevInterval[1] = Math.max(interval[1], prevInterval[1]);
        }
    }
    result.push(prevInterval);
    return result;
};