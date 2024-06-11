/**
 * @param {string} s
 * @return {string}
 */


var decodeString = function(s) {
    let stack = [];

    for(let index in s){
        if(s[index] === ']'){
            let substr = '';
            
            while(stack[stack.length-1]!=='['){
                substr = stack[stack.length-1] + substr;
                stack.pop();
            }

            stack.pop();

            let times = '';

            while(Number.isInteger(Number(stack[stack.length-1]))){
                times = stack.pop()+times;
            }

            let decodedstr =  substr.repeat(Number(times));

            stack = [...stack,...decodedstr.split('')];
        }else{
            stack.push(s[index]);
        }
    }

    return stack.join('');
};
