//https://leetcode.com/problems/reverse-integer/

/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    result = parseInt(x.toString().split("").reverse().join(""))
    if(x < 0){result = -result}
    return result > 2147483648 || result < -2147483648 ? 0 : result
};