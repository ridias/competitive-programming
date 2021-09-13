// Largest prime factor

/*
    The prime factors of 13195 are 5, 7, 13 and 29.

    What is the largest prime factor of the number 600851475143 ?
*/


function largestPrime(number){
    limit = Math.floor(Math.sqrt(number))
    for(let i = limit; i >= 2; i--){
        if(number % i == 0 && isPrime(i)) return i
    }
    return 2
}

function isPrime(number){
    for(let i = 2; i * i < number; i++){
        if(number % i == 0) return false 
    }
    return true
}

console.log(largestPrime(13195))
console.log(largestPrime(600851475143))