/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {

    // for(let i = 0;i<s2.length;i++){

    //     let map = new Map();
    //     for(let j = i;j<i+s1.length;j++){
    //         map.set(s2[j],(map.get(s2[j])||0)+1);
    //     }
    //     for(let k = 0;k<s1.length;k++){
    //         if(map.has(s1[k])){
    //             map.set(s1[k],map.get(s1[k])-1);
    //             if(map.get(s1[k])===0) map.delete(s1[k]);
    //         }else{
    //             break;
    //         }
    //     }
    //     if(map.size === 0)return true;
    // }
    // return false;


    let i = 0;
    let j = 0;

    let len1 = s1.length;
    let len2 = s2.length;
    let map = new Map();

    while(j<len2){
        map.set(s2[j],(map.get(s2[j])||0)+1);

        while(j-i+1 > s1.length){
            map.set(s2[i],map.get(s2[i])-1);
            if(map.get(s2[i])===0) map.delete(s2[i]);
            i++;
        }

        if((j-i+1) === s1.length){
            let map2 = new Map(map);
            for(let k = 0;k<s1.length;k++){
                if(map2.has(s1[k])){
                    map2.set(s1[k],map2.get(s1[k])-1);
                    if(map2.get(s1[k])===0) map2.delete(s1[k]);
                }else{
                    break;
                }
            }
            if(map2.size === 0) return true;
        }

        j++;
    }

    return false;
};
