function solution(n) {
    let count = 0
    for(let i = 1; i <= Math.round(n / 2); i++){
        let result = i
        for(let j = i+1; j <= Math.round(n / 2); j++){
            result = result + j
            if(result == n){ count++ }
            else if(result > n){ break }
        }
    }
    
    return count
}
