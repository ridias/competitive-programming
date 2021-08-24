//https://binarysearch.com/problems/ASCII-String-to-Integer

class Solution {
    solve(s) {
        let sum = 0
        let values = s.split(/[a-z]+/).filter(x => x.length > 0)
        for(let i = 0; i < values.length; i++){
            sum += parseInt(values[i])
        }

        return sum
    }
}