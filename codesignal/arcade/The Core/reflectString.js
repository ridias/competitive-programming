function solution(inputString) {
    let letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    let result = ""
    for(let i in inputString){
        let pos = letters.indexOf(inputString[i])
        result += letters[letters.length - pos - 1]
    }
    return result
}
