// https://leetcode.com/problems/remove-outermost-parentheses/

/**
 * @param {string} S
 * @return {string}
 */
 var removeOuterParentheses = function(S) {
    let p = 0
    
    for(let i = 0; i < S.length; ){
        if(p == 0 && S[i] == "("){
            S = S.substring(0, i) + S.substring(i+1, S.length)
            p++
        }else if(p - 1 == 0 && S[i] == ")"){
            S = S.substring(0, i) + S.substring(i+1, S.length)
            p--
        }else if(S[i] == "("){
            p++
            i++
        }else if(S[i] == ")"){
            p--
            i++
        }
    }
    return S
};