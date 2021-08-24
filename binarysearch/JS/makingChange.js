//https://binarysearch.com/problems/Making-Change

class Solution {
    solve(n) {
        let coins = [25, 10, 5, 1]
        let minCoins = 0

        let index = 0
        while(index < coins.length && n > 0){
            if(coins[index] <= n){
                minCoins += (Math.floor(n / coins[index]))
                n -= (Math.floor(n / coins[index]) * coins[index])
            }else{
                index++
            }
        }

        return minCoins

    }
}