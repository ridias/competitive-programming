// https://leetcode.com/problems/add-strings/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var addStrings = function(num1, num2) {
    while(num1.length > num2.length){
        num2 = "0" + num2
    }
    
    while(num1.length < num2.length){
        num1 = "0" + num1
    }
    
    let remain = 0
    let result = ""
    for(let i = num1.length - 1; i >= 0; i--){
        let val = num1[i] * 1 + num2[i] * 1 + remain
        result = (val % 10) + result
        remain = Math.floor(val / 10)
    }
    
    if(remain > 0){
        result = remain + result
    }
    
    return result
};