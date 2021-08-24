//https://binarysearch.com/problems/Check-Palindrome

class Solution {
    solve(s) {
        let left = 0
        let right = s.length - 1

        while(left < right){
            if(s[left] != s[right]) return false
            right--
            left++
        }

        return true
    }
}