function solution(evidences) {
    for(let col = 0; col < evidences[0].length; col++){
        let guilty = false
        let innocent = false
        for(let row = 0; row < evidences.length; row++){
            if(evidences[row][col] == -1 && innocent == false && guilty == false){
                innocent = true
            }else if(evidences[row][col] == -1 && innocent == false && guilty == true){
                return false
            }else if(evidences[row][col] == 1 && innocent == false && guilty == false){
                guilty = true
            }else if(evidences[row][col] == 1 && innocent == true && guilty == false){
                return false
            }
        }
    }
    return true
}
