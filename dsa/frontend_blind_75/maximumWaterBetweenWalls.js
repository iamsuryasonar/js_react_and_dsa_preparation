// This problem is not Trapping rain water problem

function maximumWaterBetweenWalls(walls) {
    // brute force approach - O(n^2)
    // let n = walls.length;
    // let max = 0;
    
    // for(let i=0;i<n;i++){
    //     let currMax = 0;
    //    for(let j=i+1;j<n;j++){
    //         let shortest = Math.min(walls[i],walls[j]);
    //         currMax = Math.max(currMax,shortest*(j-i));
    //     }
    //     max = Math.max(currMax,max);
    // }
    
    // return max;

   // Optimised approach - O(n)
    let n = walls.length;
    let max = 0;
    
    let i = 0,j=n-1;
    
    while(i<j){
        let shortest = Math.min(walls[i],walls[j]);
        
        max = Math.max(max,shortest*(j-i));
        
        if(shortest === walls[i]){
            i++;
        }else{
           j--; 
        }
    }
    
    return max;
    
}



console.log(maximumWaterBetweenWalls([1,4,2,3])) // 6
// Explanation: Consider two walls (i=1 & i=3) with heights 4 and 3. The water is limited by the shorter wall with height 3, so the container holds 2 (distance) * 3 (shorter height) = 6 units.
// All other combination of walls result in smaller area.

console.log(maximumWaterBetweenWalls([1,1])) // 1
console.log(maximumWaterBetweenWalls([1,0])) // 0 
console.log(maximumWaterBetweenWalls([4,2,4,0,10,6])) // 20   - this is the most important test case.
