
//kadane algorithm
function solution(inputArray) {
    let result = inputArray[0]
    let current = inputArray[0]
    for(let i = 1;  i < inputArray.length; i++){
        current = Math.max(inputArray[i], current + inputArray[i])
        if(result < current){
            result = current
        }
    }
    return result
}
