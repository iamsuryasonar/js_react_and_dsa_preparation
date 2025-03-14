var nextGreaterElement = function(nums1, nums2) {
    let i = 0;
    let stack = [];
    let map = new Map();

    while(i<nums2.length){
        if(stack.length > 0 && stack[stack.length - 1] < nums2[i]) {
		    let lastElInStack = stack.pop();
            map.set(lastElInStack, nums2[i]);
		    continue;
        }
        stack.push(nums2[i]);
        i++;
    }

    return nums1.map(item => (map.get(item) || -1));
};
