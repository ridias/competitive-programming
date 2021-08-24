//https://leetcode.com/problems/container-with-most-water/

/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    let max = 0
    for(let i = 0; i < height.length - 1; i++){
        for(let j = i+1; j < height.length; j++){
            let result = Math.min(height[i], height[j]) * (j - i)
            if(max < result){
                max = result
            }
        }
    }
    return max
};