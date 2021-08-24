//https://leetcode.com/problems/excel-sheet-column-number/

/**
 * @param {string} s
 * @return {number}
 */
 var titleToNumber = function(s) {
    let acc = 0
    let sum = 0
    for(let i = s.length - 1; i >= 0; i--){
        let ascii = s[i].charCodeAt(0) - 65 + 1
        s.length - 1 == i ? sum += ascii : sum += (acc * ascii)
        acc == 0 ? acc = 26 : acc *= 26
    }
    
    return sum
};