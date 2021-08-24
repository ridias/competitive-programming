//https://binarysearch.com/problems/A-Flight-of-Stairs

class Solution {
    solve(n) {
        let dp = [0, 1]
        if(n == 0) return dp[0]

        while(n > 0){
            let tmp = dp[1]
            dp[1] = dp[0] + dp[1]
            dp[0] = tmp % (10 ** 9 + 7)
            n--
        }

        return dp[dp.length - 1] % (10 ** 9 + 7)


        
    }
}