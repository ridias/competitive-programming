// https://leetcode.com/problems/letter-combinations-of-a-phone-number/

/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
    if(digits == "") return []
    
    let map = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    }
    
    let result = []
    
    recursion(digits, map, "", 0, result)
    return result
};

var recursion = function(digits, map, str, index, result){
    if(str.length == digits.length){
        result.push(str)
    }
    
    if(index >= digits.length) return;
    
    let letters = map[digits[index]]
    for(let j = 0; j < letters.length; j++){
        recursion(digits, map, str + letters[j], index + 1, result)
    }
}