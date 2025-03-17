/*
Given an array of strings strs, group the 
anagrams together. You can return the answer in any order.

Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:
There is no string in strs that can be rearranged to form "bat".
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.

Example 2:
Input: strs = [""]
Output: [[""]]

Example 3:
Input: strs = ["a"]
Output: [["a"]]
*/

// var groupAnagrams = function(strs) {

//     let obj = {};

//     strs.forEach((str)=>{
//         let sortedStr = str.split('').sort().join('');
        
//         if(obj.hasOwnProperty(sortedStr)){
//             obj[sortedStr].push(str);
//         }else{
//             obj[sortedStr]= [str];
//         }
//     })

//     return Object.values(obj);
// };


var groupAnagrams = function(strs) {
    let map = new Map();

    for(let i = 0;i<strs.length;i++){
        let charArr = new Array(26).fill(0);
        for(let j = 0;j<strs[i].length;j++){
            let index = strs[i].charCodeAt(j)-'a'.charCodeAt(0);
            charArr[index] = charArr[index] + 1;
        }
        let key = charArr.join('_'); // use '_' as delimiter (important test case)
        map.set(key,(map.has(key)?[...map.get(key),strs[i]]:[strs[i]]));
    }

    return Array.from(map.values());
};
