// https://leetcode.com/problems/minimum-domino-rotations-for-equal-row/

/**
 * @param {number[]} tops
 * @param {number[]} bottoms
 * @return {number}
 */
 var minDominoRotations = function(tops, bottoms) {
    
    let map = {}
    let visited = {}
    let min = tops.length + 1
    let queue = []
    for(let i = 0; i < tops.length; i++){
        map[tops[i]] == undefined ? map[tops[i]] = [1, 0] : map[tops[i]][0] += 1
        map[bottoms[i]] == undefined ? map[bottoms[i]] = [0, 1] : map[bottoms[i]][1] += 1
        
        if(map[tops[i]][0] + map[tops[i]][1] >= tops.length){
            let top = map[tops[i]][0]
            let bot = map[tops[i]][1]
            if(top <= bot && !visited[tops[i] + "b"]){
                queue.push([tops[i], "b"])
                visited[tops[i] + "b"] = 1
            }else if(top > bot && !visited[tops[i] + "t"]){
                queue.push([tops[i], "t"]) 
                visited[tops[i] + "t"]
            }
            
        }
        
        if(map[bottoms[i]][0] + map[bottoms[i]][1] >= tops.length){
            let top = map[bottoms[i]][0]
            let bot = map[bottoms[i]][1]
            if(top <= bot && !visited[bottoms[i] + "b"]){
                queue.push([bottoms[i], "b"])
                visited[bottoms[i] + "b"] = 1
            }else if(top > bot && !visited[bottoms[i] + "t"]){
                queue.push([bottoms[i], "t"]) 
                visited[bottoms[i] + "t"]
            }
        }
    }
    
    while(queue.length > 0){
        let count = 0
        let countSwaps = 0
        let cell = queue.shift()
        let num = cell[0]
        let dir = cell[1]
        
        for(let i = 0; i < tops.length; i++){
            if(tops[i] == num && bottoms[i] == num){
                count++
            }else if(tops[i] == num && dir == "b"){
                countSwaps++
                count++
            }else if(bottoms[i] == num && dir == "t"){
                count++
                countSwaps++
            }else if(tops[i] == num && dir == "t"){
                count++
            }else if(bottoms[i] == num && dir == "b"){
                count++
            }
        }
        
        if(count == tops.length && min > countSwaps){
            min = countSwaps
        }
    }
    
    return min == tops.length + 1 ? -1 : min
    
    
    
};