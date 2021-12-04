function solution(n, l, r) {
    let count = 0
    for(let i = l; i <= r; i++){
        for(let j = i; j <= r; j++){
            if((i + j) == n){ count ++; break;}
            if((i + j) > n) { break }
        }
    }
    return count
}
