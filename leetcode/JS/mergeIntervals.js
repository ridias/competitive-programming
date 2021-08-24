//https://leetcode.com/problems/merge-intervals/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
    if(intervals.length == 0) return []
    intervals.sort((a, b) => a[0] == b[0] ? a[1] - b[1] : a[0] - b[0])
    var result = [intervals[0]]
    for(let i = 1; i < intervals.length; i++){
        if(result[result.length - 1][0] <= intervals[i][0] && intervals[i][0] <= result[result.length-1][1] && result[result.length-1][1] <= intervals[i][1]){
            result[result.length-1][1] = intervals[i][1]
        }else if(result[result.length - 1][0] <= intervals[i][0] && intervals[i][0] <= result[result.length -1][1] && result[result.length - 1][0] <= intervals[i][1] && intervals[i][1] <= result[result.length -1][1]){
            //no action
        }else{
            result.push(intervals[i])
        }
    }
    
    return result
};