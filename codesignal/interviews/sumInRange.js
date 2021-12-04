function solution(nums, queries) {
    let test = {}
    let result = 0
    for(let i = 0; i < nums.length; i++){
        result += nums[i]
        test[i] = result
    }
    
    result = 0
    for(let i = 0; i < queries.length; i++){
        if(queries[i][0] === 0){
            result += test[queries[i][1]]
        }else{
            result += test[queries[i][1]] - test[queries[i][0] - 1]
        }
        
    }
    return ((result % 1000000007) + 1000000007) % 1000000007
}
