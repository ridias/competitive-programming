// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/

/**
 * @param {string} s
 * @return {string}
 */
 var removeDuplicates = function(s) {
    S = s.split("")
    
    while(true){
        let found = false
    
        for(let i = 1; i < S.length; i++){
            if(S[i] == S[i - 1]){
                S[i] = ""
                S[i - 1] = ""
                found = true
            }
        }
        
        S = S.join("").split("")
        if(!found) break
    }
    
    return S.join("")
};