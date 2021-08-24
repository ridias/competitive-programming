// https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/

/**
 * @param {string} S
 * @return {number}
 */
 var minAddToMakeValid = function(S) {
    let stack = []
    let result = 0
    for(let i = 0; i < S.length; i++){
        if(S[i] == "("){
            stack.push("(")
        }else if(S[i] == ")" && stack[stack.length - 1] == "("){
            stack.pop()
        }else if(S[i] == ")" && stack.length == 0){
            result++
        }
    }
    
    return result + stack.length
};