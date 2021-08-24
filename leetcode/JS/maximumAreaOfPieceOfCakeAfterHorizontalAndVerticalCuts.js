// https://leetcode.com/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/

/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
 var maxArea = function(h, w, horizontalCuts, verticalCuts) {
    horizontalCuts.push(0)
    horizontalCuts.push(h)
    verticalCuts.push(0)
    verticalCuts.push(w)
    
    horizontalCuts.sort((a, b) => a - b)
    verticalCuts.sort((a, b) => a - b)
    
    let maxDiffHorizontal = 0;
    let maxDiffVertical = 0;
    for(let i = 1; i < horizontalCuts.length; i++){
        maxDiffHorizontal = Math.max(horizontalCuts[i] - horizontalCuts[i - 1], maxDiffHorizontal)
    }
    
    for(let i = 1; i < verticalCuts.length; i++){
        maxDiffVertical = Math.max(verticalCuts[i] - verticalCuts[i - 1], maxDiffVertical)
    }
    
    return (BigInt(maxDiffHorizontal) * BigInt(maxDiffVertical)) % (1000000007n)
};