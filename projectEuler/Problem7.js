// 10001st prime

/*
    By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

    What is the 10 001st prime number?
*/

function kthNumberPrime(k){
    let primes = [2,3,5,7,11]
    for(let i = 12; primes.length < k; i++) if(isPrime(i)) primes.push(i)
    return primes[k-1]
}

function isPrime(n){
    for(let i = 2; i * i <= n; i++) if(n % i == 0) return false
    return true
}

console.log(kthNumberPrime(10001))