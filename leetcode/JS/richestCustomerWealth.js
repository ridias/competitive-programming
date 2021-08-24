// https://leetcode.com/problems/richest-customer-wealth/

/**
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
    let max = 0;
    
    for(let i = 0; i < accounts.length; i++){
        let count = 0;
        for(let j = 0; j < accounts[i].length; j++){
            count += accounts[i][j]
        }
        
        if(count > max) max = count
    }
    
    return max
};