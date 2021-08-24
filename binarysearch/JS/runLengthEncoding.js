//https://binarysearch.com/problems/Run-Length-Encoding

class Solution {
    solve(s) {
        let result = ""
        if(s.length == 0) return result

        let previous = s[0]
        let count = 1
        for(let i = 1; i < s.length; i++){
            if(s[i] == previous){
                count++
            }else{
                result += count + previous
                previous = s[i]
                count = 1
            }
        }

        if(count > 0) result += count + previous
        return result
    }
}