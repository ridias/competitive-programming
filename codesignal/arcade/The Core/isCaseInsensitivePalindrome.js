function solution(inputString) {
    inputString = inputString.toLowerCase()
    if(inputString.length <= 0){ return false }
    let finalPart = ""
    let firstPart = ""
    firstPart = inputString.substr(0, Math.floor(inputString.length / 2))
    if(inputString.length % 2 == 1){ 
        finalPart = inputString.substr(Math.floor(inputString.length / 2) + 1, inputString.length)
    }else{
        finalPart = inputString.substr(Math.floor(inputString.length / 2), inputString.length)
    }
    finalPart = finalPart.split("").reverse().join("")
    return (firstPart === finalPart) ? true : false
}
