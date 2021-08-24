//https://binarysearch.com/problems/Compress-String

class Solution {
    solve(s) {
        if(s.length == 0) return s
        let res = ""
        let previous = s[0]
        for(let i = 1; i < s.length; i++){
            if(previous != s[i]){
                res += previous
                previous = s[i]
            }
        }

        res += previous
        return res
    }
}