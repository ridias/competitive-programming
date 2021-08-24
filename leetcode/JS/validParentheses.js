//https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let stack = []
    
    for(let i = 0; i < s.length; i++){
        
        if(s[i] == "("){ stack.push("(") }
        else if(s[i] == "{"){ stack.push("{") }
        else if(s[i] == "["){ stack.push("[") }
        else if(s[i] == ")" && stack[stack.length - 1] == "("){ stack.pop() }
        else if(s[i] == "]" && stack[stack.length - 1] == "["){ stack.pop() }
        else if(s[i] == "}" && stack[stack.length - 1] == "{"){ stack.pop() }
        else{ return false }
    }
    
    if(stack.length > 0){ return false }
    return true
};