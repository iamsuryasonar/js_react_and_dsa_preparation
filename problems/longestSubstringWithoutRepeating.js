/* 
there will be two pointers, left and right, both initialised to 0th index.
we will use set to keep track of the non - duplicate characters.
if the current character(right index) in not present in the set, we will add it to the set. 
if the window size is more then longestSubstring found till now, than we will update it.
if a duplicate character is found, we will increment left pointer till that duplicate character is not removed.
and so on... 
*/


function longestSubstringWithoutRepeating(str) {
    let longestSubstring = 0;
    let set = new Set();
    let right = 0;
    let left = 0;

    while (right < str.length) {
        if (!set.has(str[right])) {
            set.add(str[right]);
            longestSubstring = Math.max(right - left + 1, longestSubstring);
        } else {
            while (set.has(str[right])) {
                set.delete(str[left]);
                left++;
            }
            set.add(str[right]);
        }
        right++;
    }
    return longestSubstring;
};

const s = "abdcdabcbb";
console.log(longestSubstringWithoutRepeating(s));