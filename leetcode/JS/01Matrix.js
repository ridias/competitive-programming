// https://leetcode.com/problems/01-matrix/


// BFS

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
 var updateMatrix = function(mat) {
    
    for(let i = 0; i < mat.length; i++){
        
        for(let j = 0; j < mat[i].length; j++){
            
            if(mat[i][j] == 1){
                let queue = [[i + 1, j, 1], [i, j + 1, 1], [i - 1, j, 1], [i, j - 1, 1]]
                let visited = {}
                while(queue.length > 0){
                    let pos = queue.shift()
                    let x = pos[0]
                    let y = pos[1]
                    let count = pos[2]
                    if(x < mat.length && x >= 0 && y < mat[x].length && y >= 0 && visited[x + ";" + y] == undefined){
                        visited[x + ";" + y] = 1
                        if(mat[x][y] == 0){
                            mat[i][j] = count
                            break;
                        }else{
                            queue.push([x + 1, y, count + 1])
                            queue.push([x, y + 1, count + 1])
                            queue.push([x - 1, y, count + 1])
                            queue.push([x, y - 1, count + 1])
                        }
                    }
                }
            }
        }
    }
    
    return mat
};


// DP (dynamic programming -> better)

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
 var updateMatrix = function(mat) {
    
    let matrix = []
    
    for(let i = 0; i < mat.length; i++){
        matrix.push(new Array(mat[i].length).fill(1000000))
    }
    
    for(let i = 0; i < mat.length; i++){
        for(let j = 0; j < mat[i].length; j++){
            
            if(mat[i][j] == 0){
                matrix[i][j] = 0
            }else{
                if(i > 0) matrix[i][j] = Math.min(matrix[i][j], matrix[i - 1][j] + 1)
                if(j > 0) matrix[i][j] = Math.min(matrix[i][j], matrix[i][j - 1] + 1)
            }
        }
    }
    
    for(let i = mat.length - 1; i >= 0; i--){
        for(let j = mat[i].length - 1; j >= 0; j--){
            
            if(mat[i][j] == 0){
                matrix[i][j] = 0
            }else{
                if(i < mat.length - 1) matrix[i][j] = Math.min(matrix[i][j], matrix[i + 1][j] + 1);
                if(j < mat[i].length - 1) matrix[i][j] = Math.min(matrix[i][j], matrix[i][j + 1] + 1);
            }
        }
    }
    
    return matrix
};