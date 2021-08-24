// https://leetcode.com/problems/check-if-it-is-a-straight-line/

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
 var checkStraightLine = function(coordinates) {
    let y1 = coordinates[0][1]
    let x1 = coordinates[0][0]
    let y2 = coordinates[1][1]
    let x2 = coordinates[1][0]
    
    let m = (y2 - y1) / (x2 - x1)
    
    let equation = [m, m * -(x1) + y1]
    
    for(let i = 2; i < coordinates.length; i++){
        if(equation[0] * coordinates[i][0] + equation[1] != coordinates[i][1]){
            return false
        }
    }
    

    
    
    
    return true
};