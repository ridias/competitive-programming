function solution(inputArray) {
    let maxLength = 0
    let result = []
    for(let i = 0; i < inputArray.length; i++){
        if(inputArray[i].length > maxLength) maxLength = inputArray[i].length
    }
    
    for(let i = 0; i <= maxLength; i++){
        for(let j = 0; j < inputArray.length; j++){
            if(inputArray[j].length === i){
                result.push(inputArray[j])
            }
        }
    }
    
    return result
}
