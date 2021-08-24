// https://leetcode.com/problems/maximal-square/

/**
 * @param {character[][]} matrix
 * @return {number}
 */
 var maximalSquare = function(matrix) {
    
    let max = 0
    
    for(let i = 0; i < matrix.length; i++){
        
        for(let j = 0; j < matrix[i].length; j++){
            
            if(matrix[i][j] == "1"){
                let x = i
                let y = j
                let size = 1
                let isSquare = true
                while(x < matrix.length && y < matrix[x].length && isSquare){
                    x++
                    y++
                    if(x >= matrix.length || y >= matrix[0].length) break;
                    if(matrix[x][y] != "1"){
                        break;
                    }else{
                        for(let left = y; left >= j; left--){
                            if(matrix[x][left] != "1"){
                                isSquare = false
                                break;
                            }
                        }
                        
                        for(let top = x; top >= i && isSquare; top--){
                            if(matrix[top][y] != "1"){
                                isSquare = false
                                break;
                            }
                        }
                    }
                    
                    if(isSquare)size++
                }
                
                if(size > max) max = size
            }
        }
    }
    
    return max * max
};