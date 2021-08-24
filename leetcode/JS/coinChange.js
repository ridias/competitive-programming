// https://leetcode.com/problems/coin-change/

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 var coinChange = function(coins, amount) {
    let result = []
    if(amount == 0) return 0
    coins.sort((a, b) => a - b)
    
    for(let i = 0; i <= amount; i++){
        result.push(amount + 1)
    }
    
    result[0] = -1
    
    for(let i = 1; i < result.length; i++){
        let a = i
        for(let j = coins.length - 1; j >= 0; j--){
            if(coins[j] == a){
                result[i] = 1
            }else if(coins[j] < a){
                result[i] = Math.min(result[i], 1 + result[a - coins[j]])
            }
        }
    }

    return result[amount] == amount + 1 ? -1 : result[amount]
};