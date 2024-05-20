/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    
    if(Array.isArray(obj)){
        let res = []
        for(let item of obj){
            if(Boolean(item) === true){
                res.push(compactObject(item));
            }
        }
        return res;
    }else if(typeof obj === 'object' && obj!==null){
        let res = {}
        for(let item of Object.entries(obj)){
            if(Boolean(item[1]) === true){
                res[item[0]] = compactObject(item[1]);
            }
        }
        return res;
    }else{
        if(Boolean(obj) === true){
            return obj;
        }
    }
};
