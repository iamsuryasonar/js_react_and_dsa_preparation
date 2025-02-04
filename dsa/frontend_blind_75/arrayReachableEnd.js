// Leetcode - 55. Jump Game


function arrayReachableEnd(numbers) {

// Brute force approach - O(n^2)
//   let auxArr = Array(numbers.length).fill(false);
  
//   let end = numbers.length-1;
  
//   for(let i = numbers.length-2;i>=0;i--){
//     for(let j = i; j<=i+numbers[i];j++){
//         if(j>=numbers.length) continue;
        
//         if(j===end||auxArr[j]){
//             auxArr[i] = true;
//             continue;
//         }
//     }
//   }
  
//   return auxArr[0];

// optimised solution - O(n)

    let reachable = 0;
    
    for(let i = 0;i<numbers.length;i++){
        if(i>reachable) return false;
        reachable = Math.max(reachable, i+numbers[i]);
        if(reachable >= numbers.length) return true;
    }
    return false;
}


console.log(arrayReachableEnd([1,0,0,0]))
