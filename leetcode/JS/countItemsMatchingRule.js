// https://leetcode.com/problems/count-items-matching-a-rule/

/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
 var countMatches = function(items, ruleKey, ruleValue) {
    let pos = ruleKey == "type" ? 0 : ruleKey == "color" ? 1 : 2;
    let count = 0;
    for(let i = 0; i < items.length; i++){
        if(items[i][pos] == ruleValue) count++
    }
    
    return count;
};