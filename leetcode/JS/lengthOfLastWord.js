//https://leetcode.com/problems/length-of-last-word/

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    s = s.trim()
    s = s.split(" ")
    return s[s.length - 1].length
    console.log(s)
};