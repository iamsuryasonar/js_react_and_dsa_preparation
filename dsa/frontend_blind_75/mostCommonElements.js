// Leetcode - 347. Top K Frequent Elements

/**
 * @param {number[]} numbers
 * @param {number} k
 * @return {number[]}
 */

// brute force approach - O(nlogn) because of sorting
export default function mostCommonElements(numbers, k) {
  // let map = new Map();

  // for(let i in numbers){
  //   map.set(numbers[i],(map.get(numbers[i])||0)+1);
  // }

  // let res = Array.from(map).sort((a,b)=>b[1]-a[1]).slice(0,k).map((arr)=>arr[0]);

  // return res;

  // optimised approach - O(n)

    let map = new Map();
    let result = [];

    for(let i in numbers){
        map.set(numbers[i],(map.get(numbers[i])||0)+1);
    }

    let bucketArr = Array(numbers.length+1).fill(null).map(()=>[]);

    for(let [value,freq] of Array.from(map)){
        bucketArr[freq].push(value);
    }

    let filteredArr = bucketArr.filter((item)=>item.length!==0);

    for(let i = filteredArr.length-1;i>=0;i--){
        for(let j = 0;j<filteredArr[i].length;j++){
            result.push(filteredArr[i][j]);
            if(result.length === k) return result;
        }
    }

    return result;
}
