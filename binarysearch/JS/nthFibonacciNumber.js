//https://binarysearch.com/problems/Nth-Fibonacci-Number

class Solution {
    solve(n) {
        if(n <= 2) return 1
        let previous = 1
        let current = 1
        n -= 2
        while(n > 0){
            let tmp = previous
            previous = current
            current += tmp
            n--
        }

        return current
    }
}