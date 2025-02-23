//https://www.geeksforgeeks.org/problems/floor-in-a-sorted-array-1587115620/1?itm_source=geeksforgeeks&itm_medium=article&itm_campaign=practice_card

function findFloor(arr, k) {
       if(k<arr[0]) return -1;
        
        let i = 0, j = arr.length-1;
        let mid =0;
        
        while(i<=j){
            mid = Math.floor((i+j)/2);
            
            if(arr[mid]=== k){
                return mid;
            }else if(arr[mid]<k){
                if(k<arr[mid] && mid!==0 && arr[mid-1]<k){
                    return mid-1;
                }
                i = mid+1;
            }else{
                if(k<arr[mid] && mid!==0 && arr[mid-1]<k){
                    return mid-1;
                }
                j = mid-1;
            }
        }
        
        return mid;
    }


    console.log(findFloor([1,2],2))
    console.log(findFloor([1],5))
    console.log(findFloor([10143, 29122, 30010],23112))
    console.log(findFloor([1, 2, 8, 10, 11, 12, 19],5))
    console.log(findFloor([1, 2, 8, 10, 11, 12, 19],0))
