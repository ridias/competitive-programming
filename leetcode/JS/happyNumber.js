// https://leetcode.com/problems/happy-number/

/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
    
    let set = {}
    
    if(n <= 0){ return false }
    
    while(n > 1){
        let sum = 0
        while(n > 0){
            sum += (n % 10) ** 2
            n = Math.floor(n / 10)
        }
        
        if(set[sum] == undefined){
            set[sum] = 1
        }else{
            return false
        }
        n = sum
    }
    
    return true
};