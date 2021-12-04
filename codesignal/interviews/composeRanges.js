function solution(nums) {
    let cache = [nums[0]]
    let result = []
    if(nums.length == 0){ return [] }
    for(let i = 1; i < nums.length; i++){
        
        if(nums[i] - cache[cache.length - 1] != 1){
            cache.length > 1 ? result.push("" + cache[0] + "->" + nums[i-1]) : result.push("" + cache[0])
            cache = []
            cache[0] = nums[i]
        }else{
            cache.push(nums[i])
        }
    }
    
    cache.length == 1 ? result.push("" + cache[0]) : result.push("" + cache[0] + "->" + cache[cache.length - 1])
    return result
}
