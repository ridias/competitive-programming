function solution(maxLength, text) {
    let newText = text.replace(/\W+/g, " ")
    let count = 0
    let arrayText = newText.split(" ")
    for(let i = 0; i < arrayText.length; i++) 
        if(arrayText[i].length <= maxLength && arrayText[i].length > 0) count++
    return count
}
