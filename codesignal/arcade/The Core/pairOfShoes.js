function solution(shoes) {
    let i = 0
    if(shoes.length === 1){ return false }
    while(i < shoes.length - 1){
        let founded = false
        for(let j = i + 1; j < shoes.length; j++){
            if(shoes[i][1] === shoes[j][1] && shoes[i][0] != shoes[j][0]){
                shoes.splice(i, 1)
                shoes.splice(j - 1, 1) 
                break;
            }
            if(j + 1 === shoes.length && founded == false){ return false }
        }
    }
    if(shoes.length === 1){ return false }
    return true
}
