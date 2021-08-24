// https://leetcode.com/problems/fruit-into-baskets/

/**
 * @param {number[]} fruits
 * @return {number}
 */
 var totalFruit = function(fruits) {
    let k = 2
    let map = {}
    let left = 0
    let right = 0
    let max = 0
    
    while(right < fruits.length){
        if(map[fruits[right]] == undefined){
            map[fruits[right]] = 1
            k--
        }else if(map[fruits[right]] == 0){
            map[fruits[right]] += 1
            k--
        }else if(map[fruits[right]] > 0){
            map[fruits[right]] += 1
        }
        
        if(k < 0){
            if(max < right - left) max = right - left
            while(left < fruits.length && k < 0){
                map[fruits[left]] -= 1
                if(map[fruits[left]] == 0){
                    k++
                }
                left++
            }
        }
        
        right++
    }
    
    if(max < right - left) max = right - left
    return max
};