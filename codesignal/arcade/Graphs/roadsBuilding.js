function solution(cities, roads) {
    let dict = new Array(cities)
    for(let i = 0; i < roads.length; i++){
        let x = roads[i][0]
        let y = roads[i][1]
        dict[x] == undefined ? dict[x] = new Set([y]) : dict[x].add(y)
        dict[y] == undefined ? dict[y] = new Set([x]) : dict[y].add(x)
    }

    let result = []
    for(let i = 0; i < dict.length; i++){
        if(dict[i] == undefined){
            for(let j = i+1; j < cities; j++) result.push([i, j])
        }else{
            for(let j = i+1; j < cities; j++){
                if(i != j){
                    if(!dict[i].has(j)){
                        result.push([i, j])
                    }   
                }
            }
        }
    }
    
    return result
}
