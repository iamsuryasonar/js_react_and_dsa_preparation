/**
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @return {number}
 */

function padZero(num){
    let strNum = String(num);
    if(strNum.length===1){
        return '000'+strNum;
    }else if(strNum.length===2){
        return '00'+strNum;
    }else if(strNum.length===3){
        return '0'+strNum;
    }else{
        return strNum;
    }
}

var generateKey = function(num1, num2, num3) {
    let newNum1 = padZero(num1);
    let newNum2 = padZero(num2);
    let newNum3 = padZero(num3);

    let res = '';

    for(let i = 0; i<4; i++){
        res += Math.min(newNum1[i],newNum2[i],newNum3[i]);
    }

    return Number(res);
};
