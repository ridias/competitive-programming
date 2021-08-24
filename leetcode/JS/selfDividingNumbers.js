// https://leetcode.com/problems/self-dividing-numbers/

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
 var selfDividingNumbers = function(left, right) {
    let result = []
    for(let i = left; i <= right; i++){
        if(selfDividing(i)){ result.push(i) }
    }
    return result
};

function selfDividing(n){
    let aux = n
    while(n > 0){
        if(aux % (n % 10) !== 0){
            return false
        }
        n = Math.floor(n / 10)
    }
    return true
}