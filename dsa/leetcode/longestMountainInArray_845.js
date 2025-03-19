/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function(arr) {
    let len = arr.length;
    let i = 1;
    let result = 0;
    while(i<=len-2){
        
        if(arr[i]>arr[i-1]&&arr[i]>arr[i+1]){ // discover peak
            let j = i;
            let count = 1;

            while(j>0&& arr[j]>arr[j-1]){ // count in left
                j--;
                count++;
            }
            j=i;
            while(j<len-1 && arr[j]>arr[j+1]){// count in right
                j++;
                count++;
            }

            result = Math.max(result,count);
        }
        i++;
    }
    return result;
};
