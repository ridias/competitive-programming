// https://leetcode.com/problems/flood-fill/

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
 var floodFill = function(image, sr, sc, newColor) {
    
    let queue = [[sr, sc]]
    let startColor = image[sr][sc]
    let map = {}
    image[sr][sc] = newColor
    
    while(queue.length > 0){
        let positions = queue.shift()
        let i = positions[0]
        let j = positions[1]
        
        if(map[i+","+j] == undefined){
            map[i+","+j] = 1
        }else{
            continue
        }
        
        let left = false
        let right = false
        let top = false
        let bottom = false
        
        if(i - 1 >= 0){
            if(image[i-1][j] == startColor){
                image[i-1][j] = newColor
                queue.push([i-1, j])
                top = true
            }
        }
        
        if(i + 1 < image.length){
            if(image[i+1][j] == startColor){
                image[i+1][j] = newColor
                queue.push([i+1, j])
                bottom = true
            }
        }
        
        if(j - 1 >= 0){
            if(image[i][j-1] == startColor){
                image[i][j-1] = newColor
                queue.push([i, j-1])
                left = true
            }
        }
        
        if(j + 1 < image[i].length){
            if(image[i][j+1] == startColor){
                image[i][j+1] = newColor
                queue.push([i, j+1])
                right = true
            }
        }
        
        if(j - 1 >= 0 && i - 1 >= 0 && (top || left)){
            if(image[i-1][j-1] == startColor){
                image[i-1][j-1] = newColor
                queue.push([i-1, j-1])
            }
        }
                
        if(j + 1 < image[0].length && i - 1 >= 0 && (right || top)){
            if(image[i-1][j+1] == startColor){
                image[i-1][j+1] = newColor
                queue.push([i-1, j+1])
            }
        }
        
        if(j - 1 >= 0 && i + 1 < image.length && (bottom || left)){
            if(image[i+1][j-1] == startColor){
                image[i+1][j-1] = newColor
                queue.push([i+1, j-1])
            }
        }
    
        if(j + 1 < image[0].length && i + 1 < image.length && (bottom || right)){
            if(image[i+1][j+1] == startColor){
                image[i+1][j+1] = newColor
                queue.push([i+1, j+1])
            }
        }
    }
    
    return image
    
};