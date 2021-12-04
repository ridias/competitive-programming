function solution(n) {
    let cache = [0]
    let aux = -1
    let max = 0
    for(let i = 1; i <= n; i++){
        let count = 1
        let weakCount = 0
        for(let j = 1; j < i; j++){
            if(i % j == 0){ count++ }
        }
        
        for(let j = cache.length - 1; j > 0; j--){
            if(count < cache[j][0]){ weakCount++ }
        }
        
        if(max < weakCount){ max = weakCount }
        cache[i] = [count, weakCount]
        if(n == i){ aux = count }
    }
    
    let count = 0
    for(let j = cache.length - 1; j > 0; j--){
        if(max == cache[j][1]){ count++ }
    }
    
    return [max, count]
}
