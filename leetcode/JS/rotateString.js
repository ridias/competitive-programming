// https://leetcode.com/problems/rotate-string/

/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
 var rotateString = function(A, B) {
    if(A.length == 0 && B.length == 0) return true
    if(A.length != B.length) return false
    let positions = []
    
    for(let i = 0; i < B.length; i++){
        if(B[i] == A[0]){
            positions.push(i)
        }
    }
    
    for(let i = 0; i < positions.length; i++){
        let pos = positions[i];
        let find = true
        for(let j = 0; j < A.length; j++){
            if(B[(pos + j) % B.length] != A[j]){
                find = false
                break;
            }
        }
        
        if(find) return true
    }
    
    return false
};