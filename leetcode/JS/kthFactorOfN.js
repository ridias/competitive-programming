// https://leetcode.com/problems/the-kth-factor-of-n/

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
 var kthFactor = function(n, k) {
    let arr = []
    
    let limit = Math.sqrt(n)
    for(let i = 1; i <= limit; i++){
        
        if(n % i == 0){
            arr.push(i)
            if(n / i != i) arr.push(n / i)
        }
    }
    
    arr.sort((a, b) => a - b)
    return k <= arr.length ? arr[k - 1] : -1 
};