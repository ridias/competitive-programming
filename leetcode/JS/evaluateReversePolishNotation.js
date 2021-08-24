//https://leetcode.com/problems/evaluate-reverse-polish-notation/

/**
 * @param {string[]} tokens
 * @return {number}
 */
 var evalRPN = function(tokens) {
    
    let stack = []
    
    for(let i = 0; i < tokens.length; i++){
        if(tokens[i] == "+" || tokens[i] == "-" || tokens[i] == "*" || tokens[i] == "/"){
            let num2 = parseInt(stack.pop());
            let num = parseInt(stack.pop());
            if(tokens[i] == "+"){
                stack.push(num + num2)
            }else if(tokens[i] == "-"){
                stack.push(num - num2)
            }else if(tokens[i] == "*"){
                stack.push(num * num2)
            }else{
                let val = Math.floor(num / num2)
                let val2 = num / num2
                if(val == val2) {
                    stack.push(val)
                }else{
                    stack.push(Math.floor(val < 0 ? val + 1: val))   
                }
            }
        }else{
            stack.push(tokens[i])
        }
    }

    return stack[stack.length - 1]
};