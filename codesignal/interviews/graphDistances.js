function solution(g, s) {
    let paths = {}
    paths[s] = []
    paths[s].distance = 0
    
    while(true){
        let parent = null
        let nearest = null
        let minDistance = Infinity
        
        for(let i in paths){
            if(paths[i] === undefined){ continue }
            let nDistance = paths[i].distance
            var adj = g[i]
            
            for(let a in adj){
                if(adj[a] == -1){ continue }
                if(paths[a] !== undefined){ continue }
                let totalDistance = adj[a] + nDistance
                if(totalDistance < minDistance){
                    parent = paths[i]
                    nearest = a
                    minDistance = totalDistance
                }
            }
        }
        
        if(minDistance === Infinity){ break }
        paths[nearest] = parent.concat(nearest)
        paths[nearest].distance = minDistance
    }
    
    let result = []
    let keys = Object.keys(paths)
    for(let i in keys){
        result.push(paths[keys[i]].distance)
    }
    return result
}
