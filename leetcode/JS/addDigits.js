// https://leetcode.com/problems/add-digits/

/**
 * @param {number} num
 * @return {number}
 */
 var addDigits = function(num) {
    while(num > 9){
        let aux = num
        let result = 0
        while(aux > 0){
            result += aux % 10
            aux = Math.floor(aux / 10)
        }
        num = result
    }
    return num
};