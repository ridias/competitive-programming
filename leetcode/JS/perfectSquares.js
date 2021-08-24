// https://leetcode.com/problems/perfect-squares/

/**
 * @param {number} n
 * @return {number}
 */
 var numSquares = function(n) {
    
    var memo = {}
    let squares = []
    let limit = Math.round(Math.sqrt(n))
    for(let i = 1; i <= limit; i++){
        squares.push(i * i)
    }
    
    return recursion(n, squares, memo)
};

function recursion(num, squares, map){
    if(map[num] != undefined) return map[num]
    if(num <= 3) return num;
        
    let result = num;
    for(let i = squares.length - 1; i >= 0; i--){
        if(num - squares[i] >= 0){
            result = Math.min(result, 1 + recursion(num - squares[i], squares, map));
        }
    }

    map[num] = result
    return result;
}