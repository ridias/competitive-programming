//https://binarysearch.com/problems/Balanced-Brackets-Sequel

class Solution {
    solve(s) {
        let stack = []

        for(let i = 0; i < s.length; i++){
            if(s[i] == "(" || s[i] == "[" || s[i] == "{"){
                stack.push(s[i])
            }else if(s[i] == ")" && stack[stack.length - 1] == "("){
                stack.pop()
            }else if(s[i] == "}" && stack[stack.length - 1] == "{"){
                stack.pop()
            }else if(s[i] == "]" && stack[stack.length - 1] == "["){
                stack.pop()
            }else{
                return false
            }
        }

        if(stack.length > 0) return false

        return true
    }
}