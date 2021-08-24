//https://binarysearch.com/problems/Generate-Primes

class Solution {
    solve(n) {
        if(n <= 1) return []
        let result = [2]
        
        for(let i = 3; i <= n; i+= 2){
            let limit = Math.sqrt(i)
            let isPrime = true
            for(let j = 2; j <= limit; j++){
                if(i % j == 0){
                    isPrime = false
                    break;
                }
            }

            if(isPrime) result.push(i)
        }

        return result
    }
}