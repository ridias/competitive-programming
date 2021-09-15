// https://binarysearch.com/problems/Longest-Consecutive-Run-of-1s-in-Binary

class Solution {
    solve(n) {
        let count = 0
        let max = 0
        while(n > 0){
            let digit = n & 1
            if(digit == 1){
                count++
            }else{
                if(count > max) max = count
                count = 0
            }
            n = n >> 1
        }

        if(count > max) max = count
        return max
    }
}