// https://www.geeksforgeeks.org/problems/common-elements1132/1?itm_source=geeksforgeeks

class Solution {
    // Function to find common elements in three arrays.
    commonElements(arr1, arr2, arr3) {
        
        // let i=0;
        // let j =0;
        // let k = 0;
        // let common = [];
        
        // while(i<arr1.length && j<arr2.length && k<arr3.length){
        //     if(arr1[i]===arr2[j] && arr2[j]===arr3[k]) {
        //         if(common.length === 0 || common[common.length-1]!==arr1[i]){
        //             common.push(arr1[i]);
        //         }
        //         i++;
        //         j++;
        //         k++;
        //     }else{
        //         let max = Math.max(arr1[i],arr2[j],arr3[k]);
            
        //         while(i<arr1.length && arr1[i]<max) {
        //             i++;
        //         }
                
        //         while(j<arr2.length && arr2[j]<max) {
        //             j++;
        //         }
                
        //         while(k<arr3.length && arr3[k]<max) {
        //             k++;
        //         }
        //     }
        // }
        
        // return common;
        
        
        let i=0;
        let j =0;
        let k = 0;
        let common = [];
        
        while(i<arr1.length && j<arr2.length && k<arr3.length){
            if(arr1[i]===arr2[j] && arr2[j]===arr3[k]) {
                if(common.length === 0 || common[common.length-1]!==arr1[i]){
                    common.push(arr1[i]);
                }
                i++;
                j++;
                k++;
            } else if (arr1[i] < arr2[j]) {
                i++;
            } else if (arr2[j] < arr3[k]) {
                j++;
            } else {
                k++;
            }
        }
        
        return common;
    }
}
