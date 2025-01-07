var maxArea = function(height) {
    // let max =  0;
    // for(let i=0;i<height.length;i++){
    //     for(let j=0;j<height.length;j++){
    //         max= Math.max(Math.min(height[i],height[j])*(j-i),max)
    //     }
    // }
    // return max
    
    let max =  0;
    let i = 0;
    let j = height.length-1;

    while(i<=j){
        max= Math.max(Math.min(height[i],height[j])*(j-i),max);
        if(height[i]>height[j]){
            j--;
        }else{
            i++;
        }
    }

    return max
};


console.log(maxArea([[1,8,6,2,5,4,8,3,7]])) //49
