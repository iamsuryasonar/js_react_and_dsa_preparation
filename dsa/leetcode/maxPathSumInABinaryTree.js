// reference - (neetcode video) https://www.youtube.com/watch?v=Hr5cWUld4vU


var maxPathSum = function(root) {
    let maxPath=-Infinity;

    function getMaxPath(root){
        if(!root) return 0; // no root means no path

        let maxLeft = Math.max(getMaxPath(root.left),0); // no point of taking negative max from left or right
        let maxRight = Math.max(getMaxPath(root.right),0);

        let currentMaxPath = root.val + maxLeft + maxRight; // root node, left node and right node can form a max path
        maxPath = Math.max(currentMaxPath, maxPath); // considering above condition

        // either consider left path or right path cannot consider both left and right.
        return root.val + Math.max(maxLeft, maxRight); 
    }

    getMaxPath(root);

    return maxPath;
};
