// https://leetcode.com/problems/number-of-provinces/

/**
 * @param {number[][]} isConnected
 * @return {number}
 */
 var findCircleNum = function(isConnected) {
    let count = 0
    
    let visited = {}
    let queue = [0]
    
    for(let i = 0; i < isConnected.length; i++){
        
        let queue = []
        if(!visited[i]){
            queue.push(i)
            count++
        }
        
        while(queue.length > 0){   
            let node = queue.shift()
            visited[node] = 1
            for(let col = 0; col < isConnected[node].length; col++){
                if(col != node && isConnected[node][col] == 1 && !visited[col]){
                    queue.push(col)
                }
            }
        }
    }
    
    return count;
};