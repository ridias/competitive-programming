// https://leetcode.com/problems/path-crossing/

/**
 * @param {string} path
 * @return {boolean}
 */
 var isPathCrossing = function(path) {
    
    let visited = {}
    let x = 0
    let y = 0
    
    visited[x + ";" + y] = 1
    
    for(let i = 0; i < path.length; i++){
        
        if(path[i] == "N"){
            y++
        }else if(path[i] == "S"){
            y--
        }else if(path[i] == "E"){
            x++
        }else if(path[i] == "W"){
            x--
        }
        
        if(!visited[x + ";" + y]){
            visited[x + ";" + y] = 1
        }else{
            return true
        }
    }
    
    return false
};