/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {

    if(s.length>12) return [];

    let result = [];

    function validate(str) {
        if (parseInt(str) > 255 || parseInt(str) < 0) return false;
        if (str.length !== 1 && str[0] === '0') return false;
        return true;
    }

    function helper(index, temp) {

        if (temp.length === 4 && index === s.length) {
            result.push(temp.join('.'));
            return;
        }

        for (let i = 1; i <= 3; i++) {
            if (index + i <= s.length) {
                let str = s.substring(index, index + i);

                if (validate(str)) {
                    temp.push(str);
                    helper(index+i, temp);
                    temp.pop();
                }
            }
        }
    }
    helper(0, []);
    return result;
};
