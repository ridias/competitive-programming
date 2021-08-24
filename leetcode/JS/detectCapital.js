// https://leetcode.com/problems/detect-capital/

/**
 * @param {string} word
 * @return {boolean}
 */
 var detectCapitalUse = function(word) {
    return /^[a-z]+$/.test(word) ? 1 : /^[A-Z]{1}[a-z]*$/.test(word) ? 1 : /^[A-Z]+$/.test(word) ? 1 : 0
};