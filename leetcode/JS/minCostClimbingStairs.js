// https://leetcode.com/problems/min-cost-climbing-stairs/

/**
 * @param {number[]} cost
 * @return {number}
 */
 var minCostClimbingStairs = function(cost) {
    
    if(cost.length % 2 == 1) cost.push(0)
    
    for(let i = 2; i < cost.length; i++){
        cost[i] = Math.min(cost[i] + cost[i - 1], cost[i] + cost[i - 2])
    }
    
    return Math.min(cost[cost.length - 1], cost[cost.length - 2])
};