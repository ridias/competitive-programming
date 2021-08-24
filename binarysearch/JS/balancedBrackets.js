//https://binarysearch.com/problems/Balanced-Brackets

class Solution {
    solve(s) {
        if(s.length == 0) return true

        let stack = []

        for(let i = 0; i < s.length; i++){
            if(s[i] == "("){
                stack.push("(")
            }else if(s[i] == ")" && stack.length > 0){
                stack.pop()
            }else{
                return false
            }
        }   

        if(stack.length > 0) return false
        return true
    }
}