function isMAC48Address(inputString) {
    if(inputString.length !== 17){ return false }
    let arrayNumbers = inputString.split("-")
    if(arrayNumbers.length < 6 || arrayNumbers.length > 6){ return false}
    for(let i in arrayNumbers){
        if(arrayNumbers[i].length !== 2){ 
            return false 
        } else { 
            if(arrayNumbers[i][0] !== "A" && arrayNumbers[i][0] !== "B" && arrayNumbers[i][0] !== "C" && arrayNumbers[i][0] !== "D" && arrayNumbers[i][0] !== "E" && arrayNumbers[i][0] !== "F" && isNaN(arrayNumbers[i][0])){ return false }
            if(arrayNumbers[i][1] !== "A" && arrayNumbers[i][1] !== "B" && arrayNumbers[i][1] !== "C" && arrayNumbers[i][1] !== "D" && arrayNumbers[i][1] !== "E" && arrayNumbers[i][1] !== "F" && isNaN(arrayNumbers[i][1])){ return false }
        }
    }
    return true
}
