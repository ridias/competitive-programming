// https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/

/**
 * @param {string} s
 * @return {number}
 */
 var maxDepth = function(s) {
    let max = 0;
    let stack = [];
    
    for(let i = 0; i < s.length; i++){
        if(s[i] == "("){
            stack.push("(")
            if(stack.length > max){
                max = stack.length
            }
        }else if(s[i] == ")"){
            stack.pop();
        }
    }
    
    return max
};