/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    // let i = 0;
    // let j = 0;
    // let len = s.length;
    // let map = new Map();
    // let result = [];
    // let start = 0;

    // for(let i = 0;i<len;i++){
    //     map.set(s[i],i);
    // }

    // while(j<len && i<len){
    //     j = Math.max(map.get(s[i]),j);

    //     while(i<=j){
    //         j = Math.max(map.get(s[i]),j);  
    //         i++; 
    //     }

    //     if(i>j){
    //         result.push((i-start));
    //         start = i;
    //         j=i;
    //     }
    // }

    // return result;

    let i = 0;
    let j = 0;
    let len = s.length;
    let map = new Map();
    let result = [];
    let size = 0;

    for(let i = 0;i<len;i++){
        map.set(s[i],i);
    }

    while(i<len){
        size++;

        j = Math.max(map.get(s[i]),j);

        if(i===j){
            result.push(size);
            size = 0;
        }

        i++;
    }

    return result;
};
