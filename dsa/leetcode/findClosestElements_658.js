/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    // let len = arr.length;
    // let result = [];

    // function binarySearch(arr,x){

    //     let left = 0;
    //     let right = arr.length-1;

    //     while(left <= right){
    //         let mid = Math.floor((right-left)/2);

    //         if(x < arr[mid]){
    //             right = mid-1;
    //         }else if(x > arr[mid]){
    //             left = mid+1;
    //         }else{
    //             return mid;
    //         }
    //     }
    //     return left;
    // }

    // if(x < arr[0]){
    //     for(let  i = 0;i < k; i++){
    //         result.push(arr[i]);
    //     }
    //     return result;
    // }

    // if(x > arr[len-1]){
    //     for(let i=len-k; i< len; i++){
    //         result.push(arr[i]);
    //     }
    //     return result;
    // }

    // let foundIndex = binarySearch(arr,x);
    // let i = foundIndex - 1;
    // let j = foundIndex + 1;
    // result.push(arr[foundIndex]);

    // while(i>=0 && j<=len){
    //     if(i>=0 && result.length<k){
    //        result.push(arr[i]);
    //     } 
    //     if(j<=len && result.length<k){
    //        result.push(arr[j]);
    //     }
    //     i--;
    //     j++;
    // }

    // return result.sort((a,b)=>a-b);


    // optimised solution
    let len = arr.length;
    let left = 0;
    let right  = len-1;

    while(right-left >= k){
        let leftValue = Math.abs(x-arr[left]);
        let rightValue = Math.abs(x-arr[right]);

        if(leftValue < rightValue){
            right--;
        }else if(leftValue === rightValue && arr[left] < arr[right]){
            right--;
        }else{
            left++;
        }
    }
  
    return arr.slice(left,right+1);
};

