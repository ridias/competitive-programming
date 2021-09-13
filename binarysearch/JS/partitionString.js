// https://binarysearch.com/problems/Partition-String

class Solution {
    solve(s) {
        let result = []
        if(s == "") return result
        let map = {}
        let intervals = []
        for(let i = 0; i < s.length; i++){
            map[s[i]] == undefined ? map[s[i]] = [i, i] : map[s[i]][1] = i
        }

        let keys = Object.keys(map)

        for(let i = 0; i < keys.length; i++){
            intervals.push(map[keys[i]])
        }

        for(let i = 1; i < intervals.length; i++){
            let left = intervals[i][0]
            let right = intervals[i][1]

            if(intervals[i - 1][0] <= left && left <= intervals[i - 1][1]){
                intervals[i][0] = Math.min(intervals[i - 1][0], left)
                intervals[i][1] = Math.max(intervals[i - 1][1], right)
            }else if(intervals[i - 1][0] <= right && right <= intervals[i - 1][1]){
                intervals[i][0] = Math.min(intervals[i - 1][0], left)
                intervals[i][1] = Math.max(intervals[i - 1][1], right)
            }else{
                result.push(intervals[i - 1][1] - intervals[i - 1][0] + 1)
            }
        }

        result.push(intervals[intervals.length - 1][1] - intervals[intervals.length - 1][0] + 1)

        return result
    }
}