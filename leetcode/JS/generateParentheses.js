// https://leetcode.com/problems/generate-parentheses/

/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
    
    let open = n
    let closed = n
    let result = []
    recursion(open, closed, "", result)
    
    return result
};

var recursion = function(open, closed, current, result){
    
    if(open == 0 && closed == 0){
        result.push(current)
        return;
    }
    
    if(open < 0 || closed < 0){
        return;
    }
    
    if(open > closed) return;
    recursion(open - 1, closed, current + "(", result)
    recursion(open, closed - 1, current + ")", result)

}