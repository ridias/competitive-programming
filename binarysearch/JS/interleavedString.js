// https://binarysearch.com/problems/Interleaved-String

class Solution {
    solve(s0, s1) {
        let result = ""
        let i = 0

        while(i < s0.length && i < s1.length){
            result += s0[i] + s1[i]
            i++
        }

        if(i < s0.length){
            result += s0.substring(i, s0.length)
        }

        if(i < s1.length){
            result += s1.substring(i, s1.length)
        }
        

        return result
    }
}
