class Solution {
    solve(intervals) {
        intervals.sort((a, b) => a[0] - b[0])
        let results = []
        for(let i = 1; i < intervals.length; i++){
            let left = intervals[i][0]
            let right = intervals[i][1]

            if(intervals[i-1][0] <= left && left <= intervals[i-1][1]){
                intervals[i][0] = Math.min(left, intervals[i - 1][0])
                intervals[i][1] = Math.max(right, intervals[i - 1][1])
            }else if(intervals[i - 1][0] <= right && right <= intervals[i - 1][1]){
                intervals[i][0] = Math.min(left, intervals[i - 1][0])
                intervals[i][1] = Math.max(right, intervals[i - 1][1])
            }else{
                results.push([intervals[i-1][0], intervals[i-1][1]])
            }
        }

        results.push([intervals[intervals.length - 1][0], intervals[intervals.length - 1][1]])

        return results
    }
}