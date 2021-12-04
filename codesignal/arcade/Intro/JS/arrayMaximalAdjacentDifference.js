function arrayMaximalAdjacentDifference(inputArray) {
    let max = Math.abs(inputArray[0] - inputArray[1])
    for(let i = 1; i < inputArray.length - 1; i++){
        let value = Math.abs(inputArray[i] - inputArray[i+1])
        if(max < value){ max = value }
    }
    return max
}
