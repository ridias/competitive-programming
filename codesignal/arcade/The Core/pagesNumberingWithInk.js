function solution(current, numberOfDigits) {
    let currentString = current.toString()
    for(let i = current; currentString.length < numberOfDigits; i++){
        current++
        currentString += current.toString()
    }
    if(numberOfDigits < currentString.length){ current--}
    return current
}
