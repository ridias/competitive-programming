// https://binarysearch.com/problems/Removing-Parentheses

class Solution {
    solve(s) {
        let stack = []
        let count = 0

        for(let i = 0; i < s.length; i++){
            if(s[i] == ")" && stack.length == 0){
                count++
            }else if(s[i] == "("){
                stack.push("(")
            }else if(s[i] == ")" && stack.length > 0){
                stack.pop()
            }
        }

        count += stack.length
        return count
    }
}