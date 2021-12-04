function solution(n) {
    let result = 1
    for(let i = 1; i <= n; i++){
        if(result * i >= n){ return result * i} else { result *= i}
    }
}
