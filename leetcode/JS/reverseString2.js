// https://leetcode.com/problems/reverse-string-ii/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var reverseStr = function(s, k) {
    if(k == 1) return s
    let result = ""
    let i = 0
    while(i < s.length){
        let aux = k
        let r = ""
        while(aux > 0 && i < s.length){
            r = s[i] + r
            aux--
            i++
        }
        
        result += r
        aux = k
        while(aux > 0 && i < s.length){
            result += s[i]
            aux--
            i++
        }
    }
    
    return result
};