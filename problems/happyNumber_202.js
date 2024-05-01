// brute force solution

// var isHappy = function(n) {
//     let set = new Set();
//     let current = n;

//     while(true){

//         let arr = current.toString().split('')

//         let sum = 0;

//         for(let i = 0;i<arr.length;i++){
//             sum += Number(arr[i])**2;
//         }

//         if(sum === 1){
//             return true;
//         }

//         if(set.has(sum)){
//             return false;
//         }else{
//             set.add(sum);
//             current = sum;
//         }
//     }
// };


// optimised solution using fast and slow pointer

function calculateSum(num){
    let arr = num.toString().split('')

    let sum = 0;

    for(let i = 0;i<arr.length;i++){
        sum += Number(arr[i])**2;
    }
    
    return sum;
}

var isHappy = function(n) {
    let slow = n;
    let fast = n;
    let currentNum = n;

    while(true){
        slow = calculateSum(slow);
        fast = calculateSum(calculateSum(fast));

        if(fast === slow && slow === 1){
            return true;
        }

        if(fast === slow && slow !== 1){
            return false;
        }

        currentNum = slow;
    }
};
