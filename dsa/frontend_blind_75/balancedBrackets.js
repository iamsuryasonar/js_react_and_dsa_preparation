// Leetcode - 20. Valid Parenthesis

/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
*/
function isBalancedBrackets(str) {
  let stack = [];

  for(let i = 0;i<str.length;i++){
    if(str[i] ==='{'||str[i]==='('||str[i]==='['){
      stack.push(str[i]);
    }else if(str[i] ==='}'&& stack[stack.length-1]==='{'){
      stack.pop()
    }else if(str[i] ===')'&& stack[stack.length-1]==='('){
      stack.pop()
    }else if(str[i] ===']'&& stack[stack.length-1]==='['){
      stack.pop()
    }else{
      return false;
    }
  }

  return stack.length===0;
}
