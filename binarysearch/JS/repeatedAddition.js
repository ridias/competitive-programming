// https://binarysearch.com/problems/Repeated-Addition

class Solution {
    solve(n) {
        
        while(n > 9){
            let aux = n
            let sum = 0
            while(aux > 0){
                sum += (aux % 10)
                aux = Math.floor(aux / 10)
            }

            n = sum
        }

        return n
    }
}