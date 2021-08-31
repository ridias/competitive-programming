// https://leetcode.com/problems/k-closest-points-to-origin/

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
 var kClosest = function(points, k) {
    
    let values = []
    for(let i = 0; i < points.length; i++){
        values.push([Math.sqrt(points[i][0] * points[i][0] + points[i][1] * points[i][1]), i])
    }
    
    values.sort((a, b) => a[0] - b[0])
    
    let result = []
    for(let i = 0; i < values.length && i < k; i++){
        let pos = values[i][1]
        result.push(points[pos])
    }
    
    return result
};