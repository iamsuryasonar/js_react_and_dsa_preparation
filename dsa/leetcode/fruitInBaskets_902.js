/*
 0 1 2 3 4 5 6 7 8 9 10
[3,3,3,1,2,1,1,2,3,3,4]

- take two pointer left and right;

- create a map that will keep track of the freq of the fruits found and keep track of count of fruits as well;

- move right pointer until map becomes size 3;

- remove elements in left pointer from map until map becomes size 2 again(decreasing freq), decrement count of fruit and move left as well;

- Then when the map is of size 2 register the maximum count of fruits;

- move right;

 */
var totalFruit = function(fruits) {
    let map = new Map();
    let count = 0;
    let max = 0;
    let left = 0;
    let right = 0;

    while(right < fruits.length){
		map.set(fruits[right],(map.get(fruits[right])||0)+1);
		count++;
		
		while(map.size===3){
			map.set(fruits[left], map.get(fruits[left])-1);
			if(map.get(fruits[left])===0) map.delete(fruits[left]);
            count--;
            left++;
        }
        max = Math.max(max,count);
        right++;
    }
    return max;
};
