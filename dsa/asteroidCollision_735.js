/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let stack = [];

    for(let asteroid of asteroids){
        if(asteroid>0){ // if asteroid is positive
            stack.push(asteroid);
        }else{ // if asteroid is negative
            while(stack.length>0 && stack[stack.length-1]>0 && stack[stack.length-1] < -asteroid){ // while stack has positive value less then the abs(negative), i.e moving in opp direction 
                stack.pop();
            }

            if(stack.length>0 && stack[stack.length-1] === -asteroid){ // if both asteroids are equal
                stack.pop();
            }else if(stack.length===0 || stack[stack.length-1] < 0){ // if stack is empty of last element is negative
                stack.push(asteroid);
            }
        }
    }

    return stack;
};
