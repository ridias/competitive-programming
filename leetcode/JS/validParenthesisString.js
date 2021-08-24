// https://leetcode.com/problems/valid-parenthesis-string/

/**
 * @param {string} s
 * @return {boolean}
 */
 var checkValidString = function(s) {
    
    let stackStars = []
    let stack = []
    
    for(let i = 0; i < s.length; i++){
        if(s[i] == "("){
            stack.push(i)
        }else if(s[i] == ")"){
            if(stack.length > 0){
                stack.pop()
            }else if(stackStars.length > 0){
                stackStars.pop()
            }else{
                return false
            }
        }else{
            stackStars.push(i)
        }
    }
    
    let i = 0; 
    
    let j = 0;
    
    while(i < stack.length){
        
        if(j >= stackStars.length) return false
        
        while(stack[i] > stackStars[j] && j < stackStars.length){
            j++
        }
        
        if(j >= stackStars.length) return false
        
        i++
        j++
    }
    
    if(i < stack.length) return false
    
    return true
};