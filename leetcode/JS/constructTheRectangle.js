// https://leetcode.com/problems/construct-the-rectangle/

/**
 * @param {number} area
 * @return {number[]}
 */
 var constructRectangle = function(area) {
    
    let num1 = -1
    let num2 = -1
    
    let limit = Math.sqrt(area)
    for(let i = 1; i <= limit; i++){
        if(area % i == 0){
            num1 = i
            num2 = area / i
        }
    }
    
    return [num2, num1]
};