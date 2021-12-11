// https://binarysearch.com/problems/Index-Into-an-Infinite-String

class Solution {
    solve(s, i, j) {
        let result = ""
        for(let pos = i; pos < j; pos++){
            result += s[pos % s.length]
        }

        return result
    }
}

