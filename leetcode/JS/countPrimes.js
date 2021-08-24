// https://leetcode.com/problems/count-primes/

/**
 * @param {number} n
 * @return {number}
 */
 var countPrimes = function(n) {
    
    let arr = new Array(n).fill(true)
    pos = 2
    let result = []
    while(pos < arr.length){
        if(arr[pos] == true){
            result.push(pos)
            for(let i = pos; i < arr.length; i+= pos){
                arr[i] = false
            }
        }
        pos++
    }
    
    return result.length
};