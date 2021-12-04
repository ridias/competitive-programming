function arrayChange(inputArray) {
    let moves = 0
    for(let i = 1; i < inputArray.length; i++){
        let previous = inputArray[i - 1]
        let actual = inputArray[i]
        while(previous >= actual){
            actual++
            moves++
        }
        inputArray[i] = actual
    }
    return moves
}
