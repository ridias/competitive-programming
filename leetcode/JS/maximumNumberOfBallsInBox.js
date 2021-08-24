// https://leetcode.com/problems/maximum-number-of-balls-in-a-box/

/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
 var countBalls = function(lowLimit, highLimit) {
    let map = {}
    let currentMax = 0;
    for(let i = lowLimit; i <= highLimit; i++){
        
        let num = i;
        let sum = 0;
        while(num > 0){
            sum += (num % 10)
            num = Math.floor(num / 10)
        }
        
        if(map[sum] == undefined){
            map[sum] = 1
        }else{
            map[sum] += 1
        }
        
        if(map[sum] > currentMax){
            currentMax = map[sum]
        }
    }
    
    return currentMax
    
};