//https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/

/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let profit = 0
    
    let i = 0;
    let j = 0;
    while(i < prices.length && j < prices.length){
        
        while(prices[i] >= prices[i+1] && i < prices.length - 1){
            i++
        }
        
        j = i + 1
        
        while(prices[j] <= prices[j+1] && prices[i] < prices[j]  && j < prices.length - 1){
            j++
        }
        
        if(j >= prices.length) break
        profit += (prices[j] - prices[i])
        i = j+1
    }
    
    
    return profit
};