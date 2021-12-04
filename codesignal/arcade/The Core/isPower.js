function solution(n) {
    if(n === 0 || n === 1){ return true }
    for(let i = 2; i < 21; i++){
        for(let j = 2; j < 9; j++){
            if(Math.pow(i, j) === n){ return true }
            else if(Math.pow(i, j) > 400){
                break
            }
        }
    }
    return false
}
