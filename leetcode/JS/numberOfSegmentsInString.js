// https://leetcode.com/problems/number-of-segments-in-a-string/

/**
 * @param {string} s
 * @return {number}
 */
 var countSegments = function(s) {
    return s.split(' ').filter(x => x.length > 0).length
};