
var intersect = function(nums1, nums2) {
// brute force solution using sort - O(nlogn)
//     nums1.sort((a,b)=>a-b);
//     nums2.sort((a,b)=>a-b);
    
//     let i = 0;
//     let j = 0;
    
//     let result = [];
    
//     while(i<nums1.length && j<nums2.length){
//         if(nums1[i] < nums2[j]){
//             i++;
//         }else if(nums1[i] > nums2[j]){
//             j++;
//         }else{
//             result.push(nums1[i]);
//             i++;
//             j++;
//         }
//     }
    
//     return result;
    
    
//     optimised using space - time - O(2n) , space - O(n)

    let map = new Map();
    let result = [];
    
    for(let item of nums1){
        if(!map.has(item)){
            map.set(item,1);
        }else{
            map.set(item,map.get(item)+1);
        }
    }
    
    for(let item of nums2){
        if(map.has(item)){
            map.set(item,map.get(item)-1);
            if(map.get(item)>=0){
                result.push(item);
            }
        }
    }
    
    return result;
};
