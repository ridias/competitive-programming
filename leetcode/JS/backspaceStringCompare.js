// https://leetcode.com/problems/backspace-string-compare/

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
 var backspaceCompare = function(S, T) {
    
    let pos = 0
    let queue1 = []
    let queue2 = []
    
    while(pos < S.length || pos < T.length){
        if(pos < S.length){
            if(S[pos] == "#"){
                queue1.pop()
            }else{
                queue1.push(S[pos])
            }
        }
        
        if(pos < T.length){
            if(T[pos] == "#"){
                queue2.pop()
            }else{
                queue2.push(T[pos])
            }
        }
        
        pos++
    }
    
    return queue1.join("") == queue2.join("")
};