function firstDigit(inputString) {
    for(let i in inputString){
        if(Number.isInteger(parseInt(inputString.charAt(i)))){
            return inputString.charAt(i)
        }
    }
}
