/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */


// brute force approach (O(n!.m))
// var checkInclusion = function(s1, s2) {

//     if(s2.length<s1.length) return false;

//     function helper(index, str, result = []){

//         if(str.length === index){
//             result.push(str.join(''));
//             return;
//         }

//         for(let i = index; i<str.length; i++){
//             [str[index],str[i]] = [str[i],str[index]];
//             helper(index+1, str, result);
//             [str[index],str[i]] = [str[i],str[index]];
//         }

//         return result;
//     }

//     let arrayOfPermutations = helper(0, s1.split(''));

//     for(i=0; i<arrayOfPermutations.length; i++){
//         let found = s2.indexOf(arrayOfPermutations[i]);
//         if(!found === -1) return true;
//     }

//     return false;
// };


// optimised approach(O(n+m))
var checkInclusion = function(s1, s2) {

    if(s2.length < s1.length) return false;

    let characterCount = 0;

    let actualMap = new Map();
    let dupMap = new Map();

    for(let i = 0;i<s1.length;i++){
        actualMap.set(s1[i], (actualMap.get(s1[i])||0)+1);
    }

    let start = 0;
    let end = 0;

    while(end < s2.length){
        if(dupMap.has(s2[end])){
            dupMap.set(s2[end], dupMap.get(s2[end])+1);
        }else{
            dupMap.set(s2[end],1);
        }

        if(end > s1.length-1){
            if(dupMap.get(s2[start])>1){
                dupMap.set(s2[start], dupMap.get(s2[start])-1);
            }else{
                dupMap.delete(s2[start]);
            }
            start++;
        }

        end++;

        if (mapsAreEqual(actualMap, dupMap)) {
            return true;
        }
    }

    return false;
};

function mapsAreEqual(map1, map2) {
    if (map1.size !== map2.size) return false;
    for (let [key, value] of map1) {
        if (map2.get(key) !== value) {
            return false;
        }
    }
    return true;
}
