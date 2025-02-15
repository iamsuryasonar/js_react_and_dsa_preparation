function tripletSum(numbers) {

  // brute force solution - time - O(n^3), space - O(2n)
  //   let set = new Set();
  //   let result= [];
    
  //   numbers.sort((a,b)=>a-b)
    
  //   for(let i=0;i<numbers.length;i++){
  //      for(let j=i+1;j<numbers.length;j++){
  //           for(let k=j+1;k<numbers.length;k++){
  //               if(numbers[i]+numbers[j]+numbers[k] === 0){
  //                   if(!set.has(numbers[i]+''+numbers[j]+''+numbers[k])){
  //                       result.push([numbers[i],numbers[j],numbers[k]])
  //                   }
  //                   set.add(numbers[i]+''+numbers[j]+''+numbers[k]);
  //               }
  //           }
  //       }
  //   }
    
  //   return result;


    // optimised solution with extra space- time - O(n^2), space - O(3n)
    // let set = new Set(); 
    // let map = new Map();
    
    // let result= [];
    
    // numbers.sort((a,b)=>a-b);
    
    // for(let i=0;i<numbers.length;i++){
    //     map.set(numbers[i],i);
    // }
    
    
    // for(let i=0;i<numbers.length;i++){
    //    for(let j=i+1;j<numbers.length;j++){
    //        let index = map.get(-(numbers[i]+numbers[j]))
    //        if(map.has(-(numbers[i]+numbers[j]))&&index>j){
    //            if(!set.has(numbers[i]+''+numbers[j]+''+numbers[index])){
    //                 result.push([numbers[i],numbers[j],numbers[index]])
    //             }
    //             set.add(numbers[i]+''+numbers[j]+''+numbers[index]);
    //        } 
    //     }
    // }
    
    // return result;




    // optimised solution - time - O(n^2), space - O(2n)
    // let map = new Map();
    
    // let result= [];
    
    // numbers.sort((a,b)=>a-b);
    
    // for(let i=0;i<numbers.length;i++){
    //     map.set(numbers[i],i);
    // }
    
    // for(let i=0;i<numbers.length;i++){
    //    if (i > 0 && numbers[i] === numbers[i - 1]) continue;
    //    for(let j=i+1;j<numbers.length;j++){
    //        if (j > i+1 && numbers[j] === numbers[j - 1]) continue;
    //        let index = map.get(-(numbers[i]+numbers[j]));
    //        if(map.has(-(numbers[i]+numbers[j]))&&index>j){
    //             result.push([numbers[i],numbers[j],numbers[index]]);
    //        } 
    //     }
    // }
    
    // return result;





    // Optimised using two pointers - time - O(n^2), space - O(n) 
    let result= [];
    
    numbers.sort((a,b)=>a-b);
    
    for(let i=0;i<numbers.length;i++){
        if (i > 0 && numbers[i] === numbers[i - 1]) continue;
        
        let j = i+1;
        let k = numbers.length-1;
        
        while(j<k){
            let sum = numbers[i]+numbers[j]+numbers[k];
            
            if(sum<0){
                j++;
            }else if(sum>0){
                k--;
            }else{
                result.push([numbers[i],numbers[j],numbers[k]]);
                while(j>i&& numbers[j]===numbers[j+1]) j++;
                while(k>j&& numbers[k]===numbers[k-1]) k--;
                j++;
                k--;
            }
        }
    }
    
    return result;
}



console.log(tripletSum([-1,0,1,2,-1,-4]));
