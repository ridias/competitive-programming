// https://leetcode.com/problems/flood-fill/

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
 var floodFill = function(image, sr, sc, newColor) {
    let visited = new Set()
    let queue = [[sr, sc]]
    let bounds = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    let colorToChange = image[sr][sc]
    
    
    while(queue.length > 0){
        let pos = queue.shift()
        let i = pos[0]
        let j = pos[1]
        
        image[i][j] = newColor
        visited.add(i + ";" + j)
        
        for(let k = 0; k < bounds.length; k++){
            let x = bounds[k][0] + i
            let y = bounds[k][1] + j
            
            if(x < image.length && x >= 0 && y < image[i].length && y >= 0 && !visited.has(x + ";" + y)){
                if(image[x][y] == colorToChange){
                    queue.push([x, y])
                }
            }
        }
    }
    
    return image
};