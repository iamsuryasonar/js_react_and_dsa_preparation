// brute force approach
var isHappy = function(n) {
    let set = new Set();
    let current = n;
    
    while(true){

        let arr = current.toString().split('')

        let sum = 0;

        for(let i = 0;i<arr.length;i++){
            sum += Number(arr[i])**2;
        }

        if(sum === 1){
            return true;
        }

        if(set.has(sum)){
            return false;
        }else{
            set.add(sum);
            current = sum;
        }
    }
};
