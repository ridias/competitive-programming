function solution(inputString) {
    if(inputString.length % 2 != 0){ return false }
    if(inputString.substr(0, inputString.length / 2) == inputString.substr(inputString.length / 2, inputString.length)){ return true}
    return false
}
