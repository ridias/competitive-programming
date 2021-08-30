// https://binarysearch.com/problems/Length-of-Longest-Balanced-Subsequence

class Solution {
    solve(s) {
        let max = 0
        let stack = []

        for(let i = 0; i < s.length; i++){
            if(s[i] == "("){
                stack.push(s[i])
            }else{
                if(stack.length > 0){
                    stack.pop()
                    max += 2
                }
            }
        }
        return max
    }
}