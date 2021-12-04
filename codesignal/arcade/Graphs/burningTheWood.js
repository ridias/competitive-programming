function solution(n, wmap, start, k) {
    
    if(k == 0) return [start]
    let map = {}
    
    for(let i = 0; i < wmap.length; i++){
        let x = wmap[i][0]
        let y = wmap[i][1]
        map[x] == undefined ? map[x] = [y] : map[x].push(y)
        map[y] == undefined ? map[y] = [x] : map[y].push(x)
    }
    
    let queue = [start]
    let visited = {}
    let result = [start]
    visited[start] = 1

    while(k > 0){
        let auxQueue = []
        for(let i = 0; i < queue.length; i++){
            let node = queue[i]
            if(map[node] == undefined) continue
            for(let j = 0; j < map[node].length; j++){
                if(!visited[map[node][j]]){
                    result.push(map[node][j])
                    auxQueue.push(map[node][j])
                    visited[map[node][j]] = 1
                }
            }
        }
        
        queue = auxQueue
        k--
    }
    
    return result.sort((a, b) => a - b)
    
}
