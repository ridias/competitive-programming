function solution(inputArray) {
    let index = 1
    while(inputArray.length > 1){
        if(index % 2 === 1){
            inputArray = sumPair(inputArray)
        }else{
            inputArray = productPair(inputArray)
        }
        index++
    }
    return inputArray[0]
}

function productPair(inputArray){
    let arrayProductTotal = []
    for(let i = 0; i < inputArray.length - 1; i = i + 2){
        if(inputArray[i+1] === null || inputArray[i+1] === undefined){
            arrayProductTotal.push(inputArray[i])
        }else{
            arrayProductTotal.push(inputArray[i] * inputArray[i+1])
        }
    }
    return arrayProductTotal
}

function sumPair(inputArray){
    let arraySumTotal = []
    for(let i = 0; i < inputArray.length - 1; i = i + 2){
        if(inputArray[i+1] === null || inputArray[i+1] === undefined){
            arraySumTotal.push(inputArray[i])
        }else{
            arraySumTotal.push(inputArray[i] + inputArray[i+1])
        }
    }
    return arraySumTotal
}
