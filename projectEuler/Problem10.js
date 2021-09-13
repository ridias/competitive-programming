// Summation of primes

/**
    The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

    Find the sum of all the primes below two million.
 */


 function sumPrimes(limit){
    let sum = 0
    for(let i = 2; i < limit; i++){
        if(isPrime(i)) sum += i
    }
    return sum
 }

 function isPrime(number){
     for(let i = 2; i * i <= number; i++){
         if(number % i == 0){ return false }
     }
     return true
 }

 console.log(sumPrimes(10))
 console.log(sumPrimes(2e6))