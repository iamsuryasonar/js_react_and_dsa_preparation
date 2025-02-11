function smallestInRotatedArray(numbers) {
    let i = 0;
    let j = numbers.length - 1;
    
    while (i < j) {
        let mid = Math.floor((i + j) / 2);
        
        if (numbers[mid] > numbers[j]) {// numbers[i] > numbers[mid] - not using this logic because Math.floor() rounds number down to nearest interger, therefore if number was present in mid+1 it would have been ignored.
            i = mid+1;  
        } else {
            j = mid; 
        }
    }
    
    return numbers[i];
    
}

console.log(smallestInRotatedArray([6,7,8,-5,-4,2]));
