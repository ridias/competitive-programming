// https://leetcode.com/problems/pascals-triangle-ii/

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
 var getRow = function(rowIndex) {
    if(rowIndex == 0) return [1]
    if(rowIndex == 1) return [1,1]
    
    let previous = [1,1]
    for(let i = 2; i <= rowIndex; i++){
        let row = [1]
        
        for(let j = 1; j < i; j++){
            row.push(previous[j - 1] + previous[j])
        }
        
        row.push(1)
        previous = [...row]
    }
    
    return previous
};