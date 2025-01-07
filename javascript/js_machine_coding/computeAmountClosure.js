function computeAmount() {
    let totalAmount = 0;

    let functions = {
        lacs: function (value) {
            totalAmount += value * 100000;
            return functions;
        },
        crores: function (value) {
            totalAmount += value * 10000000;
            return functions;
        },
        thousands: function (value) {
            totalAmount += value * 1000;
            return functions;
        },
        value: function () {
            return totalAmount;
        }
    }
    return functions;
}

console.log(computeAmount().lacs(9).crores(7).value());