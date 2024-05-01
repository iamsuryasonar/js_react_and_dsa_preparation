function helper(index,str,result){
    if(str.length === index){
        result.push(str);
        return;
    }

    if(isNaN(Number(str[index]))){
        let lowerCaseletter = str.slice(index,index+1);
        let lowerCase = str.slice(0,index)+lowerCaseletter.toLowerCase() + str.slice(index+1);

        helper(index+1,lowerCase,result);

        let upperCaseletter = str.slice(index,index+1);
        let upperCase = str.slice(0,index)+upperCaseletter.toUpperCase() + str.slice(index+1);

        helper(index+1,upperCase,result);

    }else{
        helper(index+1,str,result);
    }
}
var letterCasePermutation = function(s) {
    let result = [];

    helper(0,s,result);
    return result;
};


let result = letterCasePermutation("a1b2");
console.log(result);
