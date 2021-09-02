// https://leetcode.com/problems/count-good-meals/

/**
 * @param {number[]} deliciousness
 * @return {number}
 */
 var countPairs = function(deliciousness) {
    let map = {}
    let visited = {}
    
        
    let minBound = Infinity
    let maxBound = -Infinity
    let pairs = 0
    for(let i = 0; i < deliciousness.length; i++){
        map[deliciousness[i]] == undefined ? map[deliciousness[i]] = 1 : map[deliciousness[i]] += 1 
        if(minBound > deliciousness[i]) minBound = deliciousness[i];
        if(maxBound < deliciousness[i]) maxBound = deliciousness[i];
    }
    
    for(let i = 0; i < deliciousness.length; i++){
        let closest = nextClosestPowerTwo(deliciousness[i]);
        let diff = closest - deliciousness[i]
        while(diff <= deliciousness[i]){
            let sum = diff + deliciousness[i]
            diff = sum + diff
        }
        
        while(diff <= maxBound){
            if(map[diff] != undefined) pairs += map[diff]
            let sum = diff + deliciousness[i]
            diff = sum + diff
            pairs = pairs % (10 ** 9 + 7)
        }
        
        if(visited[deliciousness[i]] == undefined){
            if(nextClosestPowerTwo(deliciousness[i]) == deliciousness[i]){
                let quantity = map[deliciousness[i]];
                pairs += (quantity * (quantity - 1) / 2)
                pairs = pairs % (10 ** 9 + 7)
                visited[deliciousness[i]] = 1
            }
        }
    }
    
    return pairs % (10 ** 9 + 7)
    
};

var nextClosestPowerTwo = function(n){
    if(n <= 1) return 1
    
    let num = 2
    
    while(num < n){
        num *= 2
    }
    
    return num
}
