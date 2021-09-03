//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/


// O(n^2)

/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let count = 0;
    let profit = 0;
    for(let i = 0; i < prices.length - 1; i++){
        for(let j = i + 1; j < prices.length; j++){
            if(prices[i] > prices[j]){
                break;
            }else if(profit < prices[j] - prices[i]){
                profit = prices[j] - prices[i]
            }
        }
    }
    
    return profit
};


//O(n)

/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let min = prices[0]
    let max = prices[0]
    
    let total = 0;
    
    
    for(let i = 1; i < prices.length; i++){
        if(prices[i] < min){
            min = prices[i]
            max = prices[i]
        }
        
        if(prices[i] > max){
            max = prices[i]
        }
        
        if(max - min > total) total = max - min
    }
    
    return total
};