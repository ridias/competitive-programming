// https://leetcode.com/problems/count-largest-group/

/**
 * @param {number} n
 * @return {number}
 */
 var countLargestGroup = function(n) {
    let map = {}
    let max = 0
    for(let i = 1; i <= n; i++){
        
        let num = i;
        let sum = 0
        while(num > 0){
            sum += (num % 10)
            num = Math.floor(num / 10)
        }
        
        map[sum] == undefined ? map[sum] = [i] : map[sum].push(i)
        if(map[sum].length > max){
            max = map[sum].length
        }
    }
    
    let count = 0;
    let keys = Object.keys(map);
    for(let i = 0; i < keys.length; i++){
        if(map[keys[i]].length == max) count++
    }
    
    return count
    
    
};