var generateParenthesis = function (n) {
    let result = [];
    function helper(str, openedCount) {
        if(openedCount === 0 && str.length===(n*2)){
            result.push(`${str}`);
        }

        if (str.length>(n*2) || openedCount > n || openedCount<0) {
            return ;
        }

        helper(str+'(',openedCount+1);
        helper(str+')',openedCount-1);
    }

    helper('(', 1);
    return result;
};
