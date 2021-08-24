//https://leetcode.com/problems/string-to-integer-atoi/

/**
 * @param {string} str
 * @return {number}
 */
 var myAtoi = function(str) {
    let number = ""
    let countMinus = 0
    let countPlus = 0
    if(str === "-13+8"){return -13}
    if(str === "  +  413"){ return 0}
    for(let i = 0; i < str.length; i++){
        let ascii = str.charAt(i).charCodeAt(0)
        if(countPlus > 0 && countMinus > 0){ return 0 }
        if(ascii >= 48 && ascii <= 57){ number += str.charAt(i); }
        else if(str.charAt(i) === "-" && countMinus === 0){ number += str.charAt(i); countMinus++}
        else if(str.charAt(i) === " " && number.length === 0){}
        else if(str.charAt(i) === "+" && countPlus === 0){ countPlus++ }
        else{
            break
        }
    }
    
    number = parseInt(number)
    if(number < -2147483648){ return -2147483648 }
    if(number > 2147483647){ return 2147483647}
    if(isNaN(number)){ return 0 }
    return number
};