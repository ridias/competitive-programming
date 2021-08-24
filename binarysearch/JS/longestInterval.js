//https://binarysearch.com/problems/Longest-Interval

class Solution {
    solve(intervals) {
        intervals.sort((a, b) => a[0] - b[0])
        let max = intervals[0][1] - intervals[0][0] + 1
        for(let i = 1; i < intervals.length; i++){
            if(intervals[i - 1][0] <= intervals[i][0] && intervals[i][0] <= intervals[i - 1][1]){
                intervals[i][0] = Math.min(intervals[i][0], intervals[i - 1][0])
                intervals[i][1] = Math.max(intervals[i][1], intervals[i - 1][1])
            }else if(intervals[i - 1][0] <= intervals[i][1] && intervals[i][1] <= intervals[i - 1][1]){
                intervals[i][0] = Math.min(intervals[i][0], intervals[i - 1][0])
                intervals[i][1] = Math.max(intervals[i][1], intervals[i - 1][1])
            }

            if(max < intervals[i][1] - intervals[i][0] + 1) max = intervals[i][1] - intervals[i][0] + 1
        }

        return max
    }
}