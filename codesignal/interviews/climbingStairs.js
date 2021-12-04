function solution(n) {
    var memo = {}
    
    const climb = function(n){
        let result
        if(memo[n] !== undefined){ return memo[n] }
        if(n === 1 || n === 0){
            result = 1
        }else{
            result = climb(n - 2) + climb(n - 1)
        }
        memo[n] = result
        return result
    }
    
    return climb(n)
}
