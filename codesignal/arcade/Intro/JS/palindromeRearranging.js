function palindromeRearranging(inputString) {
    let count = 0
    let i = 0
    inputString = inputString.split("")
    while(i < inputString.length){
        let letter = inputString[i]
        inputString.shift()
        let pos = inputString.indexOf(letter)
        if(pos === -1){
            count++
            if(count > 1) return false
        }else
            inputString.splice(pos, 1)
        
    }
    return true
}
