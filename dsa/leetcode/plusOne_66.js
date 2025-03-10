var plusOne = function(digits) {
    let num = (BigInt(digits.join(''))+BigInt(1)).toString();
    let result = [];
    for(let i = 0;i<num.length;i++){
        result.push(BigInt(num.charAt(i)))
    }
    return result
};

console.log(plusOne([1,2,3])) //[1,2,4]


var plusOne = function(digits) {
    let end = digits.length-1;
        
    let carry = 0;
    
    do{
        let newDigit = digits[end]+((carry>0)?carry:1);
        
        newDigit = newDigit.toString().split('');
        
        if(newDigit.length===2){
            carry = Number(newDigit[0]);
            digits[end] = Number(newDigit[1]);
        }else{
            carry = 0;
            digits[end] = Number(newDigit[0]);
        }
        end--;
    }while(end>=0 && carry>0);
    
    if(carry > 0){
        digits.unshift(Number(carry));
    }
    
    return digits;
};

/*

important test case:
[1,2,3]
[9]
[9,9]
[8,9,9,9]

*/
