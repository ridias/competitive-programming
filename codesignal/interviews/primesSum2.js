function solution(n) {
    let sum = 0
    for(let i = 2; i <= n; i++){
        if(isPrime(i)){ sum += i % (1e9 + 7) }
    }
    return sum
}

function isPrime(n){
    for(let i = 2; i * i <= n; i++){
        if(n % i == 0){ return false }
    }
    return true 
}
