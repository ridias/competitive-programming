//https://leetcode.com/problems/add-binary/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
    
    let result = ""
    let carry = 0
    
    a = a.split("").reverse().join("")
    b = b.split("").reverse().join("")
    
    let min = Math.min(a.length, b.length)
    let max = a.length >= b.length ? a : b
    for(let i = 0; i < min; i++){
        if(a[i] == "1" && b[i] == "1"){
            result = (carry + 0) + result
            carry = 1
        }else if(a[i] == "0" && b[i] == "1" || (a[i] == "1" && b[i] == "0")){
            result = (carry ^ 1) + result
            carry = (carry ^ 1) == 0 ? 1 : 0
        }else{
            result = (carry + 0) + result
            carry = 0
        }
    }
    
    for(let i = min; i < Math.max(a.length, b.length); i++){
        if(max[i] == "1"){
            result = (carry ^ 1) + result
            carry = (carry ^ 1) == 0 ? 1 : 0
        }else{
            result = (carry + 0) + result
            carry = 0
        }
    }
    
    if(carry == 1){ result = "1" + result}
    return result
    
};