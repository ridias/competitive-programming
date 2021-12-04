function arrayMaxConsecutiveSum(inputArray, k) {
    let max = 0
    for(let i = 0; i < k; i++){ max += inputArray[i] }
    
    let result = max - inputArray[0]
    for(let j = k; j < inputArray.length; j++){
        result += inputArray[j]
        if(result > max){ max = result }
        result -= inputArray[(j - k) + 1]
    }
    
    return max
}
