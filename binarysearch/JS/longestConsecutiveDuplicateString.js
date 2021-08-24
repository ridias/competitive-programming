//https://binarysearch.com/problems/Longest-Consecutive-Duplicate-String

class Solution {
    solve(s) {
        if(s.length <= 1) return s.length
        let max = 0
        let previous = s[0]
        let count = 1
        for(let i = 1; i < s.length; i++){
            if(previous == s[i]){
                count++
            }else{
                if(max < count) max = count
                previous = s[i]
                count = 1
            }
        }
        
        if(count > max) max = count
        return max
    }
}