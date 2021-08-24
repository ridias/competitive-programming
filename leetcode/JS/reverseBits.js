// https://leetcode.com/problems/reverse-bits/

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
 var reverseBits = function(n) {
    bits = n.toString(2)
    while(bits.length < 32) bits = "0" + bits
    return parseInt(bits.split("").reverse().join(""), 2)
};