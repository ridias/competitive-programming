// https://leetcode.com/problems/fibonacci-number/

/**
 * @param {number} N
 * @return {number}
 */
 var fib = function(N) {
    let pre = 0
    let act = 1
    if(N == 0){ return 0 }
    if(N == 1){ return 1 }
    let i = 1  
    while(i < N){
        let tmp = act
        act += pre
        pre = tmp
        i++
    }
    
    return act
};