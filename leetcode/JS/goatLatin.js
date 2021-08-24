// https://leetcode.com/problems/goat-latin/

/**
 * @param {string} S
 * @return {string}
 */
 var toGoatLatin = function(S) {
    s = S.split(" ")
    let ma = "maa"
    let vowels = /[AEIOUaeiou]/
    for(let i = 0; i < s.length; i++){
        vowels.test(s[i].charAt(0)) ? s[i] += ma : s[i] = "" + s[i].substring(1, s[i].length) + s[i].charAt(0) + ma
        ma += "a"
    }
    return s.join(" ")
};