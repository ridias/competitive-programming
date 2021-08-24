//https://leetcode.com/problems/plus-one/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    
    if(digits.length == 0 && digits[0] < 9){
        digits[0] += 1
        return digits
    }
    
    let carry = 0
    let num = 0
    for(let i = digits.length - 1; i >= 0; i--){
        if(digits.length - 1 == i){
            num = digits[i] + carry + 1
            digits[i] = (digits[i] + 1 + carry) % 10
        }else{
            num = digits[i] + carry
            digits[i] = (digits[i] + carry) % 10
        }

        if(num > 9){
            carry = 1 
        }else{
            carry = 0
            break
        }
    }
    
    if(carry == 1){
        digits.unshift(1)
    }
    
    return digits
};