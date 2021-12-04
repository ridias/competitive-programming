function solution(roadRegister) {
    
    let map = []
    
    for(let i = 0; i < roadRegister.length; i++){
        map[i] = [0, 0]
    }
    
    for(let i = 0; i < roadRegister.length; i++){
        
        for(let j = 0; j < roadRegister[i].length; j++){
            if(roadRegister[i][j] == true){
                map[i][1] += 1
                map[j][0] += 1
            }
        }
    }
    
    for(let i = 0; i < map.length; i++){
        if(map[i][0] != map[i][1]) return false
    }
    
    return true
}
