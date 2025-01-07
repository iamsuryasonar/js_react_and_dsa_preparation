
var hammingDistance = function (x, y) {
    let xBit = x.toString(2);
    let yBit = y.toString(2);

    if (xBit.length > yBit.length) {
        yBit = yBit.padStart(xBit.length, "0");
    } else if (yBit.length > xBit.length) {
        xBit = xBit.padStart(yBit.length, "0");
    }

    let count = 0;

    for (let i = 0; i < xBit.length; i++) {
        if (xBit[i] !== yBit[i]) {
            count = count + 1;
        }
    }
    return count;

};