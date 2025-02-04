// Leetcode - 347. Top K Frequent Elements

/**
 * @param {number[]} numbers
 * @param {number} k
 * @return {number[]}
 */
export default function mostCommonElements(numbers, k) {
  let map = new Map();

  for(let i in numbers){
    map.set(numbers[i],(map.get(numbers[i])||0)+1);
  }

  let res = Array.from(map).sort((a,b)=>b[1]-a[1]).slice(0,k).map((arr)=>arr[0]);

  return res;
}
