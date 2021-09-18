// https://binarysearch.com/problems/Longest-Prefix-that-Is-a-Suffix/

class Solution {
    solve(s) {
        
        let left = 0
        let right = s.length - 1

        let prefix = ""
        let suffix = ""

        let result = ""

        while(left < s.length - 1 && right > 0){

            prefix = prefix + s[left]
            suffix = s[right] + suffix

            if(prefix == suffix){
                result = prefix   
            }

            left++
            right--
        }

        return result
        
    }
}