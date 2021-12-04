function extractEachKth(inputArray, k) {
    let count = 1
    let index = 0
    while(index < inputArray.length){
        if(count == k){ inputArray.splice(index, 1); count = 1; } 
        else{ count++; index++ }
    }
    return inputArray
}
