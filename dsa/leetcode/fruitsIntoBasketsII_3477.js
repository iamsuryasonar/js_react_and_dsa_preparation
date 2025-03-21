/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function(fruits, baskets) {

    let count = 0;
    for(let i = 0 ; i < fruits.length; i++){
        let flag = false;
        for(let j = 0; j < baskets.length; j++){
            if(baskets[j]!==-1 && baskets[j]>=fruits[i]){
                baskets[j] = -1;
                flag = true;
                break;
            }
        }
        if(flag === false){
            count++;
        }
    }
    return count;
};
