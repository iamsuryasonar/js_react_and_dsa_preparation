/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

    function helper(num){
        return num.split('').reverse().join('');
    }

    let res;

    if(x<0){
        res = helper(x.toString().slice(1))
    }else{
        res = helper(x.toString())
    }

    if(x<0){
        res = '-'+res;
    }

    if(res > 2**31-1||res < (-(2**31))){
        return 0;
    }else{
        return res;
    }
};
