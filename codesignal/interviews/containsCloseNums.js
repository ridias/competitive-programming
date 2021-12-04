function solution(nums, k) {
    let numbersHashMap = {}
    for(let i = 0; i < nums.length; i++){
        if(numbersHashMap[nums[i]] === undefined){
            numbersHashMap[nums[i]] = [i]
        }else{
            numbersHashMap[nums[i]].push(i)
        }
    }
    
    let keys = Object.keys(numbersHashMap)
    
    for(let i = 0; i < keys.length; i++){
        if(numbersHashMap[keys[i]].length > 1){
            for(let j = 0; j < numbersHashMap[keys[i]].length - 1; j++){
                if(Math.abs(numbersHashMap[keys[i]][j] - numbersHashMap[keys[i]][j+1]) <= k ){
                    return true
                }
            }
        }
    }
    return false
}
