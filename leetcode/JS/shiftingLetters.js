// https://leetcode.com/problems/shifting-letters/

/**
 * @param {string} S
 * @param {number[]} shifts
 * @return {string}
 */
 var shiftingLetters = function(S, shifts) {
    let sum = 0
    S = S.split("")
    for(let i = 0; i < shifts.length; i++){
        sum = shifts[i] % 26
        
        for(let j = 0; j <= i && j < S.length; j++){
            S[j] = String.fromCharCode((((S[j].charCodeAt(0) - 97) + sum) % 26) + 97)
        }
    }
    
    return S.join("")
};